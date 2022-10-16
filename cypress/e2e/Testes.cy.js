import * as getEndpoint from '../../support/commands.js'

describe('Validando cenários criados na task de treino prático de API', () => {
    it('Validar se uma requisição está sendo realizada', () => {
      cy.request({
        method: 'GET',
        url : Cypress.config().baseUrl + "/v1/public/characters/1009720?apikey=70897916748e20adf1dca23fea881758&hash=1e06e99be42fbab3962c1f3de890a4d0&ts=1"
      }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
          })
});
    
    

    it('Validar se é exibido detalhes do personagem Wong', () => {
      cy.getResource('1009720','characters').should((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body.data.results[0].name).to.eq('Wong');
        expect(response.body.data.results[0].description).to.exist;
      })

    })

    it('Validar se são exibidas as keys "id", "name", "description", "modified", "thumbnail" e "comics" do personagem Doctor Strange', () => {
      cy.request({
        method: 'GET',
        url : Cypress.config().baseUrl + "/v1/public/characters?name=Doctor%20Strange&apikey=70897916748e20adf1dca23fea881758&hash=1e06e99be42fbab3962c1f3de890a4d0&ts=1"
      }).should((response) => {
        expect(response.body.data.results[0].id).to.eq(1009282);
        expect(response.body.data.results[0].name).to.eq('Doctor Strange');
        expect(response.body.data.results[0].description).to.exist;
        expect(response.body.data.results[0].modified).to.eq('2020-07-21T10:33:36-0400');
        expect(response.body.data.results[0].thumbnail).to.exist;
        expect(response.body.data.results[0].comics).to.exist;
    })
  })


    it('Validar se aparecem todos os personagens que tem o nome iniciado com a letra X quando é passado "X" como parametro em nameStartsWith', () => {
      cy.request({
        method: 'GET',
        url : Cypress.config().baseUrl + "/v1/public/characters?nameStartsWith=X&apikey=70897916748e20adf1dca23fea881758&hash=1e06e99be42fbab3962c1f3de890a4d0&ts=1"
      }).should((response) => {
        expect(response.body.data.total).to.eq(15);
    })
  })

    it('Validar se aparecem todos os personagens que tiveram aparição na HQ passada como parametro', () => {
      cy.request({
        method: 'GET',
        url : Cypress.config().baseUrl + "/v1/public/characters?comics=43508&apikey=70897916748e20adf1dca23fea881758&hash=1e06e99be42fbab3962c1f3de890a4d0&ts=1"
      }).should((response) => {
        expect(response.body.data.results[0].name).to.eq('Captain America');
        expect(response.body.data.results[1].name).to.eq('Doctor Strange');
        expect(response.body.data.results[2].name).to.eq('Pixie');
        expect(response.body.data.results[3].name).to.eq('Quentin Quire');
        expect(response.body.data.results[4].name).to.eq('Wolverine');
    })
  })

    it('Validar se é apresentada os detalhes do personagem Wolverine quando realizada a busca via ID', () => {
      cy.getResource('1009718','characters').should((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body.data.results[0].name).to.eq('Wolverine');
        expect(response.body.data.results[0].description).to.exist;
      })

    })

    it('Validar se aparece apenas as keys passadas como paremetro', () => {
      cy.request({
        method: 'GET',
        url : Cypress.config().baseUrl + "/v1/public/characters?name=Doctor%20Strange&comics=43508&apikey=70897916748e20adf1dca23fea881758&hash=1e06e99be42fbab3962c1f3de890a4d0&ts=1"
      }).should((response) => {
        expect(response.body.data.results[0].name).to.eq('Doctor Strange');
        expect(response.body.data.results[0].comics.items[0].resourceURI).to.eq('http://gateway.marvel.com/v1/public/comics/43508');
    })
  })


    it('Validar se aparecem todos os personagens das HQs Amazing Fantasy (2021) 25984,AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)1489 e Art of Marvel Movies: The Art of Captain America - The First Avenger (2011 - Present) 14696', () => {
      cy.request({
        method: 'GET',
        url : Cypress.config().baseUrl + "/v1/public/characters?series=25984%2C1489%2C14696&apikey=70897916748e20adf1dca23fea881758&hash=1e06e99be42fbab3962c1f3de890a4d0&ts=1"
      }).should((response) => {
        expect(response.body.data.results[0].name).to.eq('Avengers');
        expect(response.body.data.results[1].name).to.eq('Black Widow');
        expect(response.body.data.results[2].name).to.eq('Captain America');
        expect(response.body.data.results[3].name).to.eq('Hydra');
        expect(response.body.data.results[4].name).to.eq('Iron Man');
        expect(response.body.data.results[5].name).to.eq('Luke Cage');
        expect(response.body.data.results[6].name).to.eq('Mary Jane Watson');
        expect(response.body.data.results[7].name).to.eq('Red Skull');
        expect(response.body.data.results[8].name).to.eq('Robbie Robertson');
        expect(response.body.data.results[9].name).to.eq('Spider-Man (Peter Parker)');
        expect(response.body.data.results[10].name).to.eq('Spider-Woman (Jessica Drew)');
        expect(response.body.data.results[11].name).to.eq('Tony Stark');
        expect(response.body.data.results[12].name).to.eq('Wolverine');


      })
    })
  })




  