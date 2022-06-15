Feature(`Desktop - Scenario to fetch the unicorn name and save the name into a text file`);

Scenario(
    `Desktop - Scenario to fetch the unicorn name and save the name into a text file`,
    async ({ I, commonFunctions}) => {
        I.say(`Given I am on unicornname page`);
        I.amOnPage(`https://www.rpasamples.com/unicornname`); // accessing the webpage
        
        I.say(`When I enter the name on the text field`);
        I.fillField(`//*[@id="txtName"]`, `Catalin`); // to enter the name inside the text field 

        I.say(`When I select the Birthday month`);
        I.selectOption(`//*[@id="selMonth"]`, `dec`); // to select a month from the drop-down

        I.say(`When I click on Get Name button`);
        await commonFunctions.clickGetNameButton(); // triggering the getName onClick function
    
        I.say(`And I wait for the Unicorn name`);
        await commonFunctions.writeToFile(); // writes the text to the file
        },
);
