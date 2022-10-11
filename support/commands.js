function getEndpoint(resource, urlParam, id) {
    let baseEndpoint = Cypress.config().baseUrl + "/v1/";
  
    const resourceDict = {
      comics: "comics",
      characters: "characters",
    };

    if (resource === "characters") {
        baseEndpoint = Cypress.config().baseUrl + "/v1/";
        if (id) {
          return baseEndpoint + resourceDict[resource] + "/" + id + '?ts=1&apikey=70897916748e20adf1dca23fea881758&hash=1e06e99be42fbab3962c1f3de890a4d0';
        }
      }
      if (urlParam) {
        if (id) {
          return (
            baseEndpoint +
            resourceDict[resource] +
            "/" +
            id +
            "/" +
            urlParam
          );
        }
      }
      if (id) {
        return baseEndpoint + resourceDict[resource] + "/" + id;
      }
      return baseEndpoint + resourceDict[resource];
    }

    Cypress.Commands.add(
        "getResource",
        (
          id,
          resource, {
            auth = "admin",
            shouldFail = true,
            options,
            urlParam
          } = {}
        ) => {
          const endpoint =
            getEndpoint(resource, urlParam, id) + returnOptions(options);
                  
          let requestInfo = {
            method: "GET",
            url: endpoint,
            failOnStatusCode: shouldFail,
            auth: {
              bearer: token,
            },
            headers: {

            },
          };
      
          if (auth == false) {
            delete requestInfo.auth;
          }
          if (auth == "none") {
            delete requestInfo.headers.Identity;
          }
          cy.request(requestInfo);
        }
      );
