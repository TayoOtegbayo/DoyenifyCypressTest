class Week2Obj {

    launchURL(){
       return cy.visit("/");
    }
    elementList(){
        return cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
    }
    accessCard(){
        return cy.get(".category-cards > :nth-child(1)").click()
    }
    checkBoxElementList(){
        return cy.get(":nth-child(1) > .element-list > .menu-list > #item-1").click() 
    }
    buttonElementList(){
        return cy.get(':nth-child(1) > .element-list > .menu-list > #item-4 > .text').click()
    }
    checkBox(){
        return cy.get(".rct-icon.rct-icon-uncheck").click()
    }
    doubleClickButton(){
       return cy.get('#doubleClickBtn').dblclick()
    }
doubleClickMessage(){
    return cy.get('#doubleClickMessage').should('be.visible').and('contain','double click')
}
   result(){
    return cy.get("#result")
   }
}
export default new  Week2Obj()

//amazon.com, search for bag, click the third element, add to cart, and checkout using page object model