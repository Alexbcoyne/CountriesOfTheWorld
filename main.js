/** TO DO:
 *  - Add feature to remove whitespace and hyphens in input
 *  - Add animations/colour for correct/incorrect entries
 *  - Add countdown timer
 *  - Make webpage responsive for differnet devices
 */
const countryArr = [
    /* Europe */
    "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia",
    "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland",
    "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", 
    "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", 
    "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine",
    "United Kingdom", "Vatican",

    /* Asia */
    "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China",
    "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan",
    "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal",
    "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", "Qatar", "Saudi Arabia", "Singapore",
    "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste", "Turkey",
    "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen",
    
    /* Africa */
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde",
    "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Djibouti", "Egypt",
    "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea",
    "Guinea-Bissau", "Ivory Coast","Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali",
    "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Republic of the Congo",
    "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa",
    "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe",

    /* Oceania */
    "Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia", "Nauru", "New Zealand", "Palau",
    "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu",
    
    /* North America */
    "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica",
    "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico",
    "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Trinidad and Tobago", "United States of America",
    
    /* South America */
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru",
    "Suriname", "Uraguay", "Venezuela"
];

const aliasArr = [
    "Czechia", "Macedonia", "Holy See", "Vatican City", "UK",
    "Kazakstan", "Kyrgystan", "DPRK", "East Timor", "UAE",
    "Cabo Verde", "CAR", "DRC", "Congo-Brazzaville", "Swaziland",
    "Antigua", "Saint Kitts", "St Kitts", "Saint Vincent", "St Vincent", "St Lucia", "Trinidad", "USA",
];

const testArray = [
    "Central African Republic", "Guinea-Bissau",
];

function containsSpecChars(str){
    const specialChars = /[ -]/;
    return specialChars.test(str);
}


var gB = "Guinea-Bissau";
var input = "Guinea Bissau";


//var regex = new RegExp('[a-z]'+specialChars.join('')+']', 'ig')
//console.log(testArray[1].replace(/[^a-zA-Z]/gi, '') == input.replace(/[^a-zA-Z]/gi, ''));

//var testString = "Guinea Bissau";
//var testInput = "Central African Republic";

//console.log(testArray[0].replace(/[^a-zA-Z]/ig, ""));
//console.log(testArray[1].replace(/[^a-zA-Z]/ig, ""));

//var countryOne = "Guinea-Bissau";
//var inpTest = "Guinea Bissau";

//console.log(countryOne == inpTest.replace(/[^a-zA-Z]/gi, ''))
//var base="Guinea Bissau";
//var input="Guinea-Bissau";
//console.log(base.replace(/[^a-zA-Z]/gi, '') == input.replace(/[^a-zA-Z]/gi, ''));
/**
 * REGEX STATION
 * array = [ Country-One, Country Two]
 * 
 * user input = Country One
 * user input = CountryTwo
 * 
 * read input, remove spacing and hyphen
 * compare with array
 * 
 * output = <Country-Name>
 * 
 */


focusInput();

// Sticky Bar on Scroll
window.onscroll = function() {
    stickyBar()
}
var header = document.getElementById("header");
var sticky = header.offsetTop;

var cnumber = 0;
var arrLength = countryArr.length;
document.getElementById("counter").textContent = cnumber+"/"+arrLength;
//console.log(arrLength);

var input = document.getElementById("cname");
var inputVal = "";

// Enter Key
input.addEventListener("keyup", function(event){
    if (event.key === 'Enter'){
        event.preventDefault();
        document.getElementById("enterBtn").click();
    }
});

function getInputValue(){

    document.getElementById("sucFail").textContent = "";

    if (input){
        inputVal = input.value;

        const result = countryArr.some(element => {
            return element.toLowerCase() === inputVal.toLowerCase();
        });

        const aliasResult = aliasArr.some(element => {
            return element.toLowerCase() === inputVal.toLowerCase();
        });

        if (aliasResult !== false){
            ///// initial IF statement - else will match non-aliased countries

            var aliasMatch = aliasArr.find(element => {
                return element.toLowerCase() === inputVal.toLowerCase();
            });
            switch (aliasMatch) {
                case aliasMatch = aliasArr[0]:
                    aliasMatch = "Czech Republic";
                    break;
                case aliasMatch = aliasArr[1]:
                    aliasMatch = "North Macedonia";
                    break;
                case aliasMatch = aliasArr[2]:
                case aliasMatch = aliasArr[3]:
                    aliasMatch = "Vatican";
                    break;
                case aliasMatch = aliasArr[4]:
                    aliasMatch = "United Kingdom";
                    break;
                case aliasMatch = aliasArr[5]:
                    aliasMatch = "Kazakhstan";
                    break;
                case aliasMatch = aliasArr[6]:
                    aliasMatch = "Kyrgyzstan";
                    break;
                case aliasMatch = aliasArr[7]:
                    aliasMatch = "North Korea";
                    break;
                case aliasMatch = aliasArr[8]:
                    aliasMatch = "Timor-Leste";
                    break;
                case aliasMatch = aliasArr[9]:
                    aliasMatch = "United Arab Emirates";
                    break;
                case aliasMatch = aliasArr[10]:
                    aliasMatch = "Cape Verde";
                    break;
                case aliasMatch = aliasArr[11]:
                    aliasMatch = "Central African Republic";
                    break;
                case aliasMatch = aliasArr[12]:
                    aliasMatch = "Democratic Republic of the Congo";
                    break;
                case aliasMatch = aliasArr[13]:
                    aliasMatch = "Republic of the Congo";
                    break;
                case aliasMatch = aliasArr[14]:
                    aliasMatch = "Eswatini";
                    break;
                case aliasMatch = aliasArr[15]:
                    aliasMatch = "Antigua and Barbuda";
                    break;
                case aliasMatch = aliasArr[16]:
                case aliasMatch = aliasArr[17]:
                    aliasMatch = "Saint Kitts and Nevis";
                    break;
                case aliasMatch = aliasArr[18]:
                case aliasMatch = aliasArr[19]:
                    aliasMatch = "Saint Vincent and the Grenadines";
                    break;
                case aliasMatch = aliasArr[20]:
                    aliasMatch = "Saint Lucia";
                    break;
                case aliasMatch = aliasArr[21]:
                    aliasMatch = "Trinidad and Tobago";
                    break;
                case aliasMatch = aliasArr[22]:
                    aliasMatch = "United States of America";
                    break;
                default:
                    console.log("broken");
            }
            addName(aliasMatch);
        }
        else if (result !== false){
            const arrMatch = countryArr.find(element => {
                return element.toLowerCase() === inputVal.toLowerCase();
            });

            addName(arrMatch);            
        }
        
        else if (input.value == ""){
            console.log("please enter");
            document.getElementById("sucFail").textContent = "Please enter a country";
        }
        else {
            console.log("failure");
            document.getElementById("sucFail").textContent = inputVal+" is not a country";
        }
    }
    focusInput()
}

function addName(countryName){
    var classAdd = document.getElementById(countryName.toLowerCase());    
    classAdd.innerHTML = countryName;

    if (classAdd.classList.contains("cdata")){
        document.getElementById("sucFail").textContent = countryName+" already done";
    }
    else {
        classAdd.classList += "cdata";
        cnumber = document.getElementsByClassName("cdata").length;
        document.getElementById("counter").textContent = cnumber+"/"+arrLength;
        input.value = "";
    }
}

function getTest(){
    for (var i = 0; i < arrLength; i++){
        var cIter = countryArr[i];
        document.getElementById("cname").value = cIter;
        getInputValue();
    }
}

function getAliasTest(){
    for (var i = 0; i < arrLength; i++){
        var cIter = aliasArr[i];
        document.getElementById("cname").value = cIter;
        getInputValue();
    }
}

function focusInput(){
    document.getElementById("cname").focus();
}

function getReset(){
    location.reload();
}

function stickyBar() {
    if (window.pageYOffset > sticky){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}