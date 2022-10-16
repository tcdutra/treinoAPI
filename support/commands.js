function getEndpoint(resource, urlParam, id) {
    let baseEndpoint = Cypress.config().baseUrl + "/v1/public/";
  
    const resourceDict = {
      comics: "comics",
      characters: "characters",
    };

    if (resource === "characters") {
        baseEndpoint = Cypress.config().baseUrl + "/v1/public/";
        if (id) {
          return baseEndpoint + resourceDict[resource] + "/" + id + '?ts=1&apikey=70897916748e20adf1dca23fea881758&hash=1e06e99be42fbab3962c1f3de890a4d0';
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
            shouldFail = true,
            urlParam
          } = {}
        ) => {
          const endpoint =
            getEndpoint(resource, urlParam, id)
      
          let requestInfo = {
            method: "GET",
            url: endpoint,
            failOnStatusCode: shouldFail,
          };
          cy.request(requestInfo);
        }
      );
