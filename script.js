var callPolitician = function(name, partyColor) {

var politician = {};
politician.name = name;
politician.electionResults = null;
politician.totalVotes = 0;
politician.partyColor = partyColor;
    
politician.tallyUpTotalVotes = function() {
    this.totalVotes = 0;
    
    for (var i = 0; i < this.electionResults.length; i++)
    {
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
};
    
    return politician;
};

var susan = callPolitician("Susan Remmings", [132, 17, 11]);
var jody = callPolitician("Jody Jones", [245, 141, 136]);

console.log("Susan's color is: " + susan.partyColor);
console.log("Jody's color is: " + jody.partyColor);

susan.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

jody.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

susan.electionResults[9] = 1;
jody.electionResults[9] = 28;

susan.electionResults[4] = 17;
jody.electionResults[4] = 38;

susan.electionResults[43] = 11;
jody.electionResults[43] = 27;

var setStateResults = function(state) {
    
    theStates[state].winner = null;
    
    if (susan.electionResults[state] > jody.electionResults[state]) {
        theStates[state].winner = susan;
      
    } else if (susan.electionResults[state] < jody.electionResults[state]) {
        theStates[state].winner = jody;
    }
  
 var stateWinner = theStates[state].winner;

if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor
} else {
    theStates[state].rgbColor = [11, 32, 57];
}
    
    var stateInfoTable = document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1]
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidate1Name = body.children[0].children[0];
    var candidate2Name = body.children[1].children[0];
    var candidate1Results = body.children[0].children[1];
    var candidate2Results = body.children[1].children[1];
    var winnersName = body.children[2].children[1];
    
    //The text for the bottom table goes right below
    
    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
    
    candidate1Name.innerText = susan.name;
    candidate2Name.innetText = jody.name;
    
    candidate1Results.innerText = susan.electionResults[state];
    candidate2Results.innerText = jody.electionResults[state];
    
    if (theStates[state].winner === null) {
        winnersName.innerText = "DRAW";
    } else {
        winnersName.innerText = theStates[state].winner.name;
    }
  
};

susan.tallyUpTotalVotes();
jody.tallyUpTotalVotes();

console.log(susan.totalVotes);
console.log(jody.totalVotes);

var winner = "???";

if (susan.totalVotes < jody.totalVotes)
    {
        winner = jody.name;
    }

else if (susan.electionResults > jody.electionResults)
    {
        winner = susan.name;
    }
else
    {
        winnner = "DRAW!";
    }

console.log("AND THE WINNER IS..." + winner + "!!!")

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = susan.name;
row.children[1].innerText = susan.totalVotes;
row.children[2].innerText = jody.name;
row.children[3].innerText = jody.totalVotes;
row.children[5].innerText = winner;