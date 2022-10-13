import * as getEndpoint from '../support/commands.js'

describe('Validando cenários criados na task de treino prático de API', () => {
    it('Validar se uma requisição está sendo realizada', () => {
      cy.request({
        method: 'GET',
        url: baseUrl
      }).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
          })
});
    
    

    //it('Validar se é exibido detalhes do personagem Wong', () => {
    
    //})

    //it('Validar se são exibidas as keys "id", "name", "description", "modified", "thumbnail" e "comics" do personagem Doctor Strange', () => {
    
    //})

    //it('Validar se aparecem todos os personagens que tem o nome iniciado com a letra X quando é passado "X" como parametro em nameStartsWith', () => {
    
    //}/

    //it('Validar se aparecem todos os personagens que tiveram aparição na HQ passada como parametro', () => {
    
    //})

    //it('Validar se é apresentada os detalhes do personagem Wolverine quando realizada a busca via ID', () => {
    
    //})

    //it('Validar se aparece apenas as keys passadas como paremetro', () => {
    
    //})

    //it('Validar se aparecem todos os personagens das HQs Amazing Fantasy (2021) 25984,AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)1489 e Art of Marvel Movies: The Art of Captain America - The First Avenger (2011 - Present) 14696', () => {
    
    //})
  });