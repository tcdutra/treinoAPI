function getEndpoint(resource) {
    let baseEndpoint = Cypress.config().baseUrl + "/v1/";
  
    const resourceDict = {
      comics: "comics",
      characters: "characters",
    };

    if (resource === "characters") {
        baseEndpoint = Cypress.config().baseUrl + "/v1/";
        if (id) {
          return baseEndpoint + resourceDict[resource] + "/" + '?ts=1&apikey=70897916748e20adf1dca23fea881758&hash=1e06e99be42fbab3962c1f3de890a4d0';
        }
      }
      
      if (id) {
        return baseEndpoint + resourceDict[resource] + "/" ;
      }
      return baseEndpoint + resourceDict[resource];
    }

    Cypress.Commands.add(
        "getResource",
        () => {
          const endpoint =
            getEndpoint(resource) + returnOptions(options);
                  
          let requestInfo = {
            method: "GET",
            url: endpoint,
            failOnStatusCode: shouldFail,
            headers: {

            },
          };
          cy.request(requestInfo);
        }
      );
