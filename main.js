// Training set
const data = [
    {
        ID: 1,
        Age: 25,
        Gender: "Male",
        Height: 175,
        Weight: 80,
        BMI: 25.3,
        Label: "Normal Weight"
    },
    {
        ID: 2,
        Age: 30,
        Gender: "Female",
        Height: 160,
        Weight: 60,
        BMI: 22.5,
        Label: "Normal Weight"
    },
    {
        ID: 3,
        Age: 35,
        Gender: "Male",
        Height: 180,
        Weight: 90,
        BMI: 27.3,
        Label: "Overweight"
    },
    {
        ID: 4,
        Age: 40,
        Gender: "Female",
        Height: 150,
        Weight: 50,
        BMI: 20,
        Label: "Underweight"
    },
    {
        ID: 5,
        Age: 45,
        Gender: "Male",
        Height: 190,
        Weight: 100,
        BMI: 31.2,
        Label: "Obese"
    },
    {
        ID: 6,
        Age: 50,
        Gender: "Female",
        Height: 140,
        Weight: 40,
        BMI: 16.7,
        Label: "Underweight"
    },
    {
        ID: 7,
        Age: 55,
        Gender: "Male",
        Height: 200,
        Weight: 110,
        BMI: 34.2,
        Label: "Obese"
    },
    {
        ID: 8,
        Age: 60,
        Gender: "Female",
        Height: 130,
        Weight: 30,
        BMI: 13.3,
        Label: "Underweight"
    },
    {
        ID: 9,
        Age: 65,
        Gender: "Male",
        Height: 210,
        Weight: 120,
        BMI: 37.2,
        Label: "Obese"
    },
    {
        ID: 10,
        Age: 70,
        Gender: "Female",
        Height: 120,
        Weight: 20,
        BMI: 10,
        Label: "Underweight"
    },
    {
        ID: 11,
        Age: 18,
        Gender: "Male",
        Height: 175,
        Weight: 70,
        BMI: 23.4,
        Label: "Normal Weight"
    },
    {
        ID: 12,
        Age: 23,
        Gender: "Female",
        Height: 160,
        Weight: 50,
        BMI: 20,
        Label: "Underweight"
    },
    {
        ID: 13,
        Age: 28,
        Gender: "Male",
        Height: 180,
        Weight: 80,
        BMI: 25.3,
        Label: "Normal Weight"
    },
    {
        ID: 14,
        Age: 33,
        Gender: "Female",
        Height: 150,
        Weight: 60,
        BMI: 22.5,
        Label: "Normal Weight"
    },
    {
        ID: 15,
        Age: 38,
        Gender: "Male",
        Height: 190,
        Weight: 90,
        BMI: 27.3,
        Label: "Overweight"
    },
    {
        ID: 16,
        Age: 43,
        Gender: "Female",
        Height: 140,
        Weight: 50,
        BMI: 20,
        Label: "Underweight"
    },
    {
        ID: 17,
        Age: 48,
        Gender: "Male",
        Height: 200,
        Weight: 100,
        BMI: 31.2,
        Label: "Obese"
    },
    {
        ID: 19,
        Age: 53,
        Gender: "Female",
        Height: 130,
        Weight: 40,
        BMI: 16.7,
        Label: "Underweight"
    },
    {
        ID: 20,
        Age: 58,
        Gender: "Male",
        Height: 210,
        Weight: 110,
        BMI: 34.2,
        Label: "Obese"
    },
    {
        ID: 21,
        Age: 63,
        Gender: "Female",
        Height: 120,
        Weight: 30,
        BMI: 13.3,
        Label: "Underweight"
    },
    {
        ID: 22,
        Age: 68,
        Gender: "Male",
        Height: 175,
        Weight: 80,
        BMI: 25.3,
        Label: "Normal Weight"
    },
    {
        ID: 23,
        Age: 73,
        Gender: "Female",
        Height: 160,
        Weight: 60,
        BMI: 22.5,
        Label: "Normal Weight"
    },
    {
        ID: 24,
        Age: 78,
        Gender: "Male",
        Height: 180,
        Weight: 90,
        BMI: 27.3,
        Label: "Overweight"
    },
    {
        ID: 25,
        Age: 83,
        Gender: "Female",
        Height: 150,
        Weight: 50,
        BMI: 20,
        Label: "Underweight"
    },
    {
        ID: 26,
        Age: 88,
        Gender: "Male",
        Height: 190,
        Weight: 100,
        BMI: 31.2,
        Label: "Obese"
    },
    {
        ID: 27,
        Age: 93,
        Gender: "Female",
        Height: 140,
        Weight: 40,
        BMI: 16.7,
        Label: "Underweight"
    },
    {
        ID: 28,
        Age: 98,
        Gender: "Male",
        Height: 200,
        Weight: 110,
        BMI: 34.2,
        Label: "Obese"
    },
    {
        ID: 29,
        Age: 103,
        Gender: "Female",
        Height: 130,
        Weight: 30,
        BMI: 13.3,
        Label: "Underweight"
    },
    {
        ID: 30,
        Age: 108,
        Gender: "Male",
        Height: 210,
        Weight: 120,
        BMI: 37.2,
        Label: "Obese"
    },
    {
        ID: 31,
        Age: 19,
        Gender: "Male",
        Height: 175,
        Weight: 75,
        BMI: 24.2,
        Label: "Normal Weight"
    },
    {
        ID: 32,
        Age: 24,
        Gender: "Female",
        Height: 160,
        Weight: 55,
        BMI: 21.2,
        Label: "Normal Weight"
    },
    {
        ID: 33,
        Age: 29,
        Gender: "Male",
        Height: 180,
        Weight: 85,
        BMI: 26.1,
        Label: "Overweight"
    },
    {
        ID: 35,
        Age: 39,
        Gender: "Male",
        Height: 190,
        Weight: 95,
        BMI: 27,
        Label: "Overweight"
    },
    {
        ID: 36,
        Age: 44,
        Gender: "Female",
        Height: 140,
        Weight: 75,
        BMI: 25,
        Label: "Overweight"
    },
    {
        ID: 37,
        Age: 49,
        Gender: "Male",
        Height: 200,
        Weight: 105,
        BMI: 28.9,
        Label: "Obese"
    },
    {
        ID: 38,
        Age: 54,
        Gender: "Female",
        Height: 130,
        Weight: 85,
        BMI: 27.5,
        Label: "Overweight"
    },
    {
        ID: 39,
        Age: 59,
        Gender: "Male",
        Height: 210,
        Weight: 115,
        BMI: 30.8,
        Label: "Obese"
    },
    {
        ID: 40,
        Age: 64,
        Gender: "Female",
        Height: 120,
        Weight: 95,
        BMI: 29.1,
        Label: "Overweight"
    },
    {
        ID: 41,
        Age: 17,
        Gender: "Male",
        Height: 175,
        Weight: 65,
        BMI: 22.7,
        Label: "Normal Weight"
    },
    {
        ID: 42,
        Age: 22,
        Gender: "Female",
        Height: 160,
        Weight: 45,
        BMI: 18.7,
        Label: "Underweight"
    },
    {
        ID: 43,
        Age: 27,
        Gender: "Male",
        Height: 180,
        Weight: 75,
        BMI: 24.2,
        Label: "Normal Weight"
    },
    {
        ID: 44,
        Age: 32,
        Gender: "Female",
        Height: 150,
        Weight: 55,
        BMI: 21.2,
        Label: "Normal Weight"
    },
    {
        ID: 45,
        Age: 37,
        Gender: "Male",
        Height: 190,
        Weight: 85,
        BMI: 26.1,
        Label: "Overweight"
    },
    {
        ID: 46,
        Age: 42,
        Gender: "Female",
        Height: 140,
        Weight: 65,
        BMI: 22.7,
        Label: "Normal Weight"
    },
    {
        ID: 47,
        Age: 47,
        Gender: "Male",
        Height: 200,
        Weight: 95,
        BMI: 27,
        Label: "Overweight"
    },
    {
        ID: 48,
        Age: 52,
        Gender: "Female",
        Height: 130,
        Weight: 75,
        BMI: 25,
        Label: "Overweight"
    },
    {
        ID: 49,
        Age: 57,
        Gender: "Male",
        Height: 210,
        Weight: 105,
        BMI: 28.9,
        Label: "Obese"
    },
    {
        ID: 50,
        Age: 62,
        Gender: "Female",
        Height: 120,
        Weight: 85,
        BMI: 27.5,
        Label: "Overweight"
    },
    {
        ID: 51,
        Age: 67,
        Gender: "Male",
        Height: 175,
        Weight: 65,
        BMI: 22.7,
        Label: "Normal Weight"
    },
    {
        ID: 52,
        Age: 72,
        Gender: "Female",
        Height: 160,
        Weight: 45,
        BMI: 18.7,
        Label: "Underweight"
    },
    {
        ID: 53,
        Age: 77,
        Gender: "Male",
        Height: 180,
        Weight: 75,
        BMI: 24.2,
        Label: "Normal Weight"
    },
    {
        ID: 54,
        Age: 82,
        Gender: "Female",
        Height: 150,
        Weight: 55,
        BMI: 21.2,
        Label: "Normal Weight"
    },
    {
        ID: 55,
        Age: 87,
        Gender: "Male",
        Height: 190,
        Weight: 85,
        BMI: 26.1,
        Label: "Overweight"
    },
    {
        ID: 56,
        Age: 92,
        Gender: "Female",
        Height: 140,
        Weight: 65,
        BMI: 22.7,
        Label: "Normal Weight"
    },
    {
        ID: 57,
        Age: 97,
        Gender: "Male",
        Height: 200,
        Weight: 95,
        BMI: 27,
        Label: "Overweight"
    },
    {
        ID: 58,
        Age: 102,
        Gender: "Female",
        Height: 130,
        Weight: 75,
        BMI: 25,
        Label: "Overweight"
    },
    {
        ID: 59,
        Age: 107,
        Gender: "Male",
        Height: 210,
        Weight: 105,
        BMI: 28.9,
        Label: "Obese"
    },
    {
        ID: 60,
        Age: 112,
        Gender: "Female",
        Height: 120,
        Weight: 85,
        BMI: 27.5,
        Label: "Overweight"
    },
    {
        ID: 61,
        Age: 16,
        Gender: "Male",
        Height: 175,
        Weight: 55,
        BMI: 21.2,
        Label: "Normal Weight"
    },
    {
        ID: 62,
        Age: 21,
        Gender: "Female",
        Height: 160,
        Weight: 35,
        BMI: 16.7,
        Label: "Underweight"
    },
    {
        ID: 63,
        Age: 26,
        Gender: "Male",
        Height: 180,
        Weight: 65,
        BMI: 22.7,
        Label: "Normal Weight"
    },
    {
        ID: 64,
        Age: 31,
        Gender: "Female",
        Height: 150,
        Weight: 45,
        BMI: 18.7,
        Label: "Underweight"
    },
    {
        ID: 65,
        Age: 36,
        Gender: "Male",
        Height: 190,
        Weight: 75,
        BMI: 24.2,
        Label: "Normal Weight"
    },
    {
        ID: 66,
        Age: 41,
        Gender: "Female",
        Height: 140,
        Weight: 55,
        BMI: 21.2,
        Label: "Normal Weight"
    },
    {
        ID: 67,
        Age: 46,
        Gender: "Male",
        Height: 200,
        Weight: 85,
        BMI: 26.1,
        Label: "Overweight"
    },
    {
        ID: 68,
        Age: 51,
        Gender: "Female",
        Height: 130,
        Weight: 65,
        BMI: 22.7,
        Label: "Normal Weight"
    },
    {
        ID: 69,
        Age: 56,
        Gender: "Male",
        Height: 210,
        Weight: 95,
        BMI: 27,
        Label: "Overweight"
    },
    {
        ID: 70,
        Age: 61,
        Gender: "Female",
        Height: 120,
        Weight: 75,
        BMI: 25,
        Label: "Overweight"
    },
    {
        ID: 71,
        Age: 15,
        Gender: "Male",
        Height: 175,
        Weight: 45,
        BMI: 18.7,
        Label: "Underweight"
    },
    {
        ID: 72,
        Age: 20,
        Gender: "Female",
        Height: 160,
        Weight: 30,
        BMI: 13.3,
        Label: "Underweight"
    },
    {
        ID: 73,
        Age: 25,
        Gender: "Male",
        Height: 180,
        Weight: 55,
        BMI: 21.2,
        Label: "Normal Weight"
    },
    {
        ID: 74,
        Age: 30,
        Gender: "Female",
        Height: 150,
        Weight: 40,
        BMI: 16.7,
        Label: "Underweight"
    },
    {
        ID: 75,
        Age: 35,
        Gender: "Male",
        Height: 190,
        Weight: 65,
        BMI: 22.7,
        Label: "Normal Weight"
    },
    {
        ID: 76,
        Age: 40,
        Gender: "Female",
        Height: 140,
        Weight: 50,
        BMI: 20,
        Label: "Underweight"
    },
    {
        ID: 77,
        Age: 45,
        Gender: "Male",
        Height: 200,
        Weight: 75,
        BMI: 24.2,
        Label: "Normal Weight"
    },
    {
        ID: 78,
        Age: 50,
        Gender: "Female",
        Height: 130,
        Weight: 60,
        BMI: 22.5,
        Label: "Normal Weight"
    },
    {
        ID: 79,
        Age: 55,
        Gender: "Male",
        Height: 210,
        Weight: 85,
        BMI: 26.1,
        Label: "Overweight"
    },
    {
        ID: 80,
        Age: 60,
        Gender: "Female",
        Height: 120,
        Weight: 70,
        BMI: 23.4,
        Label: "Normal Weight"
    },
    {
        ID: 81,
        Age: 14,
        Gender: "Male",
        Height: 175,
        Weight: 35,
        BMI: 16.7,
        Label: "Underweight"
    },
    {
        ID: 82,
        Age: 19,
        Gender: "Female",
        Height: 160,
        Weight: 25,
        BMI: 10,
        Label: "Underweight"
    },
    {
        ID: 83,
        Age: 24,
        Gender: "Male",
        Height: 180,
        Weight: 45,
        BMI: 18.7,
        Label: "Underweight"
    },
    {
        ID: 84,
        Age: 29,
        Gender: "Female",
        Height: 150,
        Weight: 30,
        BMI: 13.3,
        Label: "Underweight"
    },
    {
        ID: 85,
        Age: 34,
        Gender: "Male",
        Height: 190,
        Weight: 55,
        BMI: 21.2,
        Label: "Normal Weight"
    },
    {
        ID: 86,
        Age: 13,
        Gender: "Male",
        Height: 175,
        Weight: 25,
        BMI: 10,
        Label: "Underweight"
    },
    {
        ID: 87,
        Age: 18,
        Gender: "Female",
        Height: 160,
        Weight: 20,
        BMI: 8.3,
        Label: "Underweight"
    },
    {
        ID: 88,
        Age: 23,
        Gender: "Male",
        Height: 180,
        Weight: 30,
        BMI: 13.3,
        Label: "Underweight"
    },
    {
        ID: 89,
        Age: 28,
        Gender: "Female",
        Height: 150,
        Weight: 25,
        BMI: 10,
        Label: "Underweight"
    },
    {
        ID: 90,
        Age: 33,
        Gender: "Male",
        Height: 190,
        Weight: 40,
        BMI: 16.7,
        Label: "Underweight"
    },
    {
        ID: 91,
        Age: 38,
        Gender: "Female",
        Height: 140,
        Weight: 35,
        BMI: 16.7,
        Label: "Underweight"
    },
    {
        ID: 92,
        Age: 43,
        Gender: "Male",
        Height: 200,
        Weight: 50,
        BMI: 20,
        Label: "Underweight"
    },
    {
        ID: 93,
        Age: 48,
        Gender: "Female",
        Height: 130,
        Weight: 40,
        BMI: 16.7,
        Label: "Underweight"
    },
    {
        ID: 94,
        Age: 53,
        Gender: "Male",
        Height: 210,
        Weight: 55,
        BMI: 21.2,
        Label: "Normal Weight"
    },
    {
        ID: 95,
        Age: 58,
        Gender: "Female",
        Height: 120,
        Weight: 35,
        BMI: 16.7,
        Label: "Underweight"
    },
    {
        ID: 96,
        Age: 12,
        Gender: "Male",
        Height: 175,
        Weight: 15,
        BMI: 5.6,
        Label: "Underweight"
    },
    {
        ID: 97,
        Age: 17,
        Gender: "Female",
        Height: 160,
        Weight: 15,
        BMI: 5.6,
        Label: "Underweight"
    },
    {
        ID: 98,
        Age: 22,
        Gender: "Male",
        Height: 180,
        Weight: 20,
        BMI: 8.3,
        Label: "Underweight"
    },
    {
        ID: 99,
        Age: 27,
        Gender: "Female",
        Height: 150,
        Weight: 20,
        BMI: 8.3,
        Label: "Underweight"
    },
    {
        ID: 100,
        Age: 32,
        Gender: "Male",
        Height: 190,
        Weight: 25,
        BMI: 10,
        Label: "Underweight"
    },
    {
        ID: 101,
        Age: 37,
        Gender: "Female",
        Height: 140,
        Weight: 25,
        BMI: 10,
        Label: "Underweight"
    },
    {
        ID: 102,
        Age: 42,
        Gender: "Male",
        Height: 200,
        Weight: 30,
        BMI: 13.3,
        Label: "Underweight"
    },
    {
        ID: 103,
        Age: 47,
        Gender: "Female",
        Height: 130,
        Weight: 30,
        BMI: 13.3,
        Label: "Underweight"
    },
    {
        ID: 104,
        Age: 52,
        Gender: "Male",
        Height: 210,
        Weight: 35,
        BMI: 16.7,
        Label: "Underweight"
    },
    {
        ID: 105,
        Age: 57,
        Gender: "Female",
        Height: 120,
        Weight: 25,
        BMI: 10,
        Label: "Underweight"
    },
    {
        ID: 106,
        Age: 11,
        Gender: "Male",
        Height: 175,
        Weight: 10,
        BMI: 3.9,
        Label: "Underweight"
    },
    {
        ID: 107,
        Age: 16,
        Gender: "Female",
        Height: 160,
        Weight: 10,
        BMI: 3.9,
        Label: "Underweight"
    },
    {
        ID: 108,
        Age: 21,
        Gender: "Male",
        Height: 180,
        Weight: 15,
        BMI: 5.6,
        Label: "Underweight"
    },
    {
        ID: 109,
        Age: 26,
        Gender: "Female",
        Height: 150,
        Weight: 15,
        BMI: 5.6,
        Label: "Underweight"
    },
    {
        ID: 110,
        Age: 31,
        Gender: "Male",
        Height: 190,
        Weight: 20,
        BMI: 8.3,
        Label: "Underweight"
    }
]

document.addEventListener("DOMContentLoaded", function(event) {
    renderTableData()

    let treeDiv = document.getElementById("treeDisplay")
    let entropyTable = document.getElementById("tableEntropy")
    
    // Configuration
    var config = {
        trainingSet: data,
        categoryAttr: 'Label',
        ignoredAttributes: ['ID']
    };

    // Building Decision Tree
    var tree = new dt.DecisionTree(config);
    console.log(tree);
    treeDiv.innerHTML = treeToHtml(tree.root);
    

    entropyTable.innerHTML = ""
    renderEntropyGainTable(entropyTable, tree.root, "Root")
    

    // var testData = {
    //     ID: 2,
    //     Age: 30,
    //     Gender: "Female",
    //     Height: 160,
    //     Weight: 60,
    //     BMI: 22.5,
    //     Label: "Normal Weight"
    // }
    
    // var decisionTreePrediction = tree.predict(testData);

});

function renderEntropyGainTable(dom, tree, type) {
    console.log(tree);
    dom.innerHTML += renderEntropyGain(tree, type).replaceAll(",", "")
    if(tree.match.entropygain) {
        renderEntropyGainTable(dom, tree.match, "Match")
    }
    if(tree.notMatch.entropygain) {
        renderEntropyGainTable(dom, tree.notMatch, "NotMatch")
    }
}

function renderTableData() {
    const table = document.getElementById("table-data");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
  
      //render table header
    headers = Object.keys(data[0])
    var trhead = document.createElement("tr");
    headers.forEach(function(property) {
      var th = document.createElement("th");
      th.textContent = property;
      trhead.appendChild(th);
    });
      thead.appendChild(trhead);
    table.appendChild(thead);
    
    //render table body
    data.forEach(function(val) {
        var tr = document.createElement("tr");
      headers.forEach(function(property) {
          var td = document.createElement("td");
        td.textContent = val[property];
        tr.appendChild(td)
      })
      tbody.appendChild(tr)
    })
    table.appendChild(tbody);  
}

function renderEntropyGain(tree, type) {
    return [`<h6> Best Information Gain <strong>${type}</strong></h6>`,
    `<p class="mb-0">Attributes: <strong>${tree.attribute} ${tree.predicateName} ${tree.pivot}</strong></p>`,
    `<p class="mb-0">Value: <strong>${tree.informationGain}</strong></p>`,
    `<div class="table-wrapper mb-4">`,
    `<table class="table table-responsive table-sm">`,
        `<thead>`,
            `<tr>`,
                `<th>ID</th>`,
                `<th colspan="5">Entropy & Information Gain</th>`,
            `</tr>`,
        `</thead>`,
        `<tbody>`,
            renderEntropyGainNested(tree),
        `</tbody>`,
    `</table>`,
    `<div>`
    ].join('')
}

function renderEntropyGainNested(tree) {
    return tree.entropygain.map(v => {
        return [`<tr>`,
                    `<td>${v.ID}</td>`,
                    renderEntropyGainNestedAgain(v),
                `</tr>`
        ].join('')
    })
}


function renderEntropyGainNestedAgain(v) {
    return Object.keys(v).filter(vv => vv != "ID").map(vv => {
            return [
                `<td>`,
                    `<strong>${vv}</strong>`,
                    `<table class="table table-sm table-bordered">`,
                        renderEntropyGainNestedAgainAndAgain(v[vv]),
                    `</table>`,
                `</td>`
            ].join('')
        })
}

function renderEntropyGainNestedAgainAndAgain(vv) {
    return Object.keys(vv).map(vvv => {
        return [
            `<tr>`,
                `<td>`,
                    vvv,
                `</td>`,
                `<td>${vv[vvv]}</td>`,
            `</tr>`
        ].join('')
   })
}

function treeToHtml(tree) {
    if (tree.category) {
        return  ['<ul>',
                    '<li>',
                        '<span>', tree.category, '</span>',
                    '</li>',
                 '</ul>'].join('');
    }
    
    return  ['<ul>',
                '<li>',
                    '<span><b>', tree.attribute, ' ', tree.predicateName, ' ', tree.pivot, ' ?</b></span>',
                    '<ul>',
                        '<li>',
                            '<span>yes (', tree.matchedCount, ' points) </span>',
                            treeToHtml(tree.match),
                        '</li>',
                        '<li>',
                            '<span>no (', tree.notMatchedCount, ' points) </span>',
                            treeToHtml(tree.notMatch),
                        '</li>',
                    '</ul>',
                '</li>',
             '</ul>'].join('');
}