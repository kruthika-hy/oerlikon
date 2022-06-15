const { I } = inject();

module.exports = {

    clickGetNameButton() {
        I.waitForElement(`//*[@id="getNameButton"]`, 5);
        I.click(`//*[@id="getNameButton"]`);  
    },  // function to trigger the getName onClick function

    async writeToFile() {
        I.waitForElement(`//*[@id="lblUnicornName"]`, 5);
        const fs = require('fs');
            let unicornName = await I.grabHTMLFrom(`//*[@id="lblUnicornName"]`);
            fs.writeFileSync('unicornName.txt', unicornName , function (error) {
            if (error) throw error;
        });
    }// function writes the unicornName in to a text file(by creating a file or overwriting in to the existing file)

}