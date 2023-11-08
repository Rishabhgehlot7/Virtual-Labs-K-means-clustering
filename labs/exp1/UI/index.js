
const myContainer = document.getElementById("box");
// myContainer.style.padding="0px";

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalBtn = document.getElementById("myBtn");
// var modalBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
modalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

var data = [["X", "Y"]];
var deleteButtons = [];




function addDataPoint() {
    var xValue = parseFloat(document.getElementById("X").value);
    var yValue = parseFloat(document.getElementById("Y").value);

    // Check if the values already exist in the data array
    var isDuplicate = data.some(function (entry) {
        return (
            entry[0] === roundToTwoDecimalPlaces(Number(xValue)) &&
            entry[1] === roundToTwoDecimalPlaces(Number(yValue))
        );
    });
    console.log("xValue", xValue)
    console.log("yValue", yValue)
    if (xValue == '+' || xValue == '-' || xValue == '*' || xValue == '/' || yValue == '+' || yValue == '-' || yValue == '*' || yValue == '/') {
        Swal.fire({
            icon: "error",
            title: "Invalid Values!",
            text: "Please enter valid value",
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        return;
    }

    if (isNaN(xValue) && isNaN(yValue)) {
        Swal.fire({
            icon: "error",
            title: "Missing Values!",
            text: "Please enter values for X and Y.",
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";


            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        return;
    }
    if (isNaN(xValue)) {
        Swal.fire({
            icon: "error",
            title: "Missing Value!",
            text: "Please input a value for X.",
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        return;
    }
    if (isNaN(yValue)) {
        Swal.fire({
            icon: "error",
            title: "Missing Value!",
            text: "Please input a value for  Y.",
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        return;
    }

    if (xValue > 1000 || yValue > 1000) {
        Swal.fire({
            icon: "error",
            title: "Value Exceeded!",
            text: "The highest allowed value is 1000.",
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        return;


    }
    if ((isNaN(xValue) || xValue <= 0 || (isNaN(yValue) || yValue <= 0))) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input!",
            text: "Please enter a positive number.",
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        return;


    }
    if (!isDuplicate) {
        data.push([
            roundToTwoDecimalPlaces(Number(xValue)),
            roundToTwoDecimalPlaces(Number(yValue)),
        ]);
    } else {
        // alert('Duplicate values are not allowed!');
        Swal.fire({
            icon: "error",
            title: "Duplicate Value!",
            text: "Duplicate values are not allowed.",
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        return;
    }

    drawChart();
    updateTable();
    updateTableForCompute();

    document.getElementById("X").value = "";
    document.getElementById("Y").value = "";


    if (data.length >= 11) {
        disableAddButton();
        promptToDeleteRow();
    }
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    var index = row.rowIndex;
    data.splice(index, 1);
    deleteButtons.splice(index - 1, 1);

    drawChart();
    updateTable();
    updateTableForCompute();

    if (data.length >= 11) {
        enableAddButton();
        disableDeleteButton();
        // enableNextButton();
    }
    if (data.length <= 11) {
        // enableAddButton();
        // disableDeleteButton();
        disableNextButtonData();
    }
}

function promptToDeleteRow() {
    Swal.fire({
        // title: 'Delete Rows',
        text: "Do you want to delete any row?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        customClass: {
            container: "swal-container",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },
        target: myContainer,
        didOpen: () => {
            const container = document.querySelector(".swal-container");
            const containerWidth = myContainer.offsetWidth;
            const containerHeight = myContainer.offsetHeight;

            // Change font size based on container size
            if (containerWidth >= 1000 && containerHeight >= 672) {
                container.style.fontSize = "24px";
            } else {
                container.style.fontSize = "16px";
            }

            // Adjust dimensions and position of the Swal container
            container.style.position = "absolute";
            container.style.width = "100%";
            container.style.height = "100%";
            container.style.top = "0";
            container.style.left = "0";
            container.style.padding = "0";


        },
        showCloseButton: false, // Disable the close button
        allowOutsideClick: false, // Prevent closing by clicking outside the modal
        allowEscapeKey: false, // Prevent closing by pressing the escape key
    }).then((result) => {
        if (result.isConfirmed) {
            enableNextButtonData();
            enableDeleteButtons();
            // enableAddButton();
        } else {
            disableAddButton();
            disableDeleteButton();
            enableNextButtonData();
            Swal.fire({
                icon: "info",
                html: 'Click on the <b style="color: #FF6600">NEXT</b> Button.',
                customClass: {
                    container: "swal-container",
                    popup: "swal-popup",
                    title: "swal-title",
                    content: "swal-content",
                },
                target: myContainer,
                didOpen: () => {
                    const container = document.querySelector(".swal-container");
                    const containerWidth = myContainer.offsetWidth;
                    const containerHeight = myContainer.offsetHeight;

                    // Change font size based on container size
                    if (containerWidth >= 1000 && containerHeight >= 672) {
                        container.style.fontSize = "24px";
                    } else {
                        container.style.fontSize = "16px";
                    }

                    // Adjust dimensions and position of the Swal container
                    container.style.position = "absolute";
                    container.style.width = "100%";
                    container.style.height = "100%";
                    container.style.top = "0";
                    container.style.left = "0";
                    container.style.padding = "0";


                },
                showCloseButton: false, // Disable the close button
                allowOutsideClick: false, // Prevent closing by clicking outside the modal
                allowEscapeKey: false,
            });
        }
    });

}

function enableAddButton() {
    document.getElementById("add-button").disabled = false;
}
function enableAddButtonAfterYes() {
    document.getElementById("add-button").disabled = false;
}

function disableAddButton() {
    document.getElementById("add-button").disabled = true;
}

function enableNextButtonData() {
    document.getElementById("next-button").disabled = false;
}
disableNextButtonData();
function disableNextButtonData() {
    document.getElementById("next-button").disabled = true;
}

// cluster next button
disableClusterNextButtons();
function disableClusterNextButtons() {
    document.getElementById("cluster-next-button").disabled = true;
}
function enableClusterNextButtons() {
    document.getElementById("cluster-next-button").disabled = false;
}

// centroids next button
disableCendroidNextButtons();
function disableCendroidNextButtons() {
    document.getElementById("cendroid-next-button").disabled = true;
}
function enableCendroidNextButtons() {
    document.getElementById("cendroid-next-button").disabled = false;
}

// controids Submit button
function enableCendroidSubmitButton() {
    document.getElementById("cendroid-submit-button").disabled = false;
}
function DisableCendroidSubmitButton() {
    document.getElementById("cendroid-submit-button").disabled = true;
}

// controids Submit button
function enableNewCentroidButton() {
    document.getElementById("new-centroids").disabled = false;
}
DisableNewCentroidButton();
function DisableNewCentroidButton() {
    document.getElementById("new-centroids").disabled = true;
}



function tabChange() {
    // document.getElementById('tab-2').disabled = false;
    let NextClass = document.querySelectorAll(".tab-1-disInvert");
    let currentClass = document.querySelectorAll(".tab-1-invert");
    for (let i = 0; i < NextClass.length; i++) {
        NextClass[i].className = "tab-1-invert";
    }
    for (let i = 0; i < currentClass.length; i++) {
        currentClass[i].className = "tab-1-disInvert";
    }
    document.getElementById('tab-1').style.backgroundColor = "#444648";
    document.getElementById('createimg').src = 'create.png';
    document.getElementById('calcimg').src = 'calculator1.png';
    document.getElementById('createimg').style.cursor = 'not-allowed';
    document.getElementById('calcimg').style.cursor = 'pointer';
}

function enableDeleteButtons() {
    deleteButtons.forEach(function (button) {
        button.disabled = false;
    });
}

function disableDeleteButton() {
    deleteButtons.forEach(function (button) {
        button.disabled = true;
    });
}

// function drawChart() {
//     // Convert data to the correct format
//     var formattedData = [];
//     formattedData.push(["X", "Y"]); // Initialize data array with header row

//     for (var i = 1; i < data.length; i++) {
//         var xValue = Number(data[i][0]);
//         var yValue = Number(data[i][1]);
//         formattedData.push([xValue, yValue]);
//     }

//     var chartData = google.visualization.arrayToDataTable(formattedData);

//     var options = {
//         // title: 'Data Set',
//         legend: { position: "none" },
//         hAxis: {
//             title: "X-axis",
//             minValue: 0,
//         },
//         vAxis: {
//             title: "Y-axis",
//             minValue: 0,
//         },
//         chartArea: { width: "80%", height: "80%" }, // Added to adjust the chart area size
//     };

//     var chart = new google.visualization.ScatterChart(
//         document.getElementById("chart-container")
//     );
//     chart.draw(chartData, options);

//     var GraphContainer = document.getElementById("chart-container");
//     google.visualization.errors.removeAll(GraphContainer);

//     var colorData = Array(data.length - 1).fill(null);

//     // Add change event listener to highlight selected data points
//     $('#Selectcendroid').on('change', function () {
//         console.log('Change event triggered');
//         var selectedOptions = $(this).val().map(Number);

//         // Reset color data for all data points
//         for (var i = 0; i < colorData.length; i++) {
//             colorData[i] = null;
//         }

//         // Set color data for selected data points
//         selectedOptions.forEach(function (index) {
//             var style = 'point { size: 5; fill-color: red; }';
//             chartData.setProperty(index, 1, 'style', style); // Use setProperty method to set style directly
//         });



//         // Update color information in the DataTable
//         for (var i = 0; i < chartData.getNumberOfRows(); i++) {
//             chartData.setCell(i, 1, colorData[i]);
//         }
//         console.log(colorData); // Check the contents of colorData array


//         // Redraw the chart
//         chart.draw(chartData, options);

//     });
// }
function drawChart() {
    // Convert data to the correct format
    var formattedData = [];
    formattedData.push(["X", "Y"]); // Initialize data array with header row

    for (var i = 1; i < data.length; i++) {
        var xValue = Number(data[i][0]);
        var yValue = Number(data[i][1]);
        formattedData.push([xValue, yValue]);
    }

    // Check if formattedData array has any data
    var chartData = google.visualization.arrayToDataTable(formattedData);

    var options = {
        // title: 'Data Set',
        legend: { position: "none" },
        hAxis: {
            title: "X-axis",
            minValue: 0,
        },
        vAxis: {
            title: "Y-axis",
            minValue: 0,
        },
        chartArea: { width: "80%", height: "80%" }, // Added to adjust the chart area size
    };

    var chart = new google.visualization.ScatterChart(
        document.getElementById("chart-container")
    );

    chart.draw(chartData, options);

    var GraphContainer = document.getElementById("chart-container");
    google.visualization.errors.removeAll(GraphContainer);

    if (formattedData.length > 1) {
        var styleColumn = Array(data.length - 1).fill(null); // Separate column for style information

        // Add change event listener to highlight selected data points
        $('#Selectcendroid').on('change', function () {
            console.log('Change event triggered');
            var selectedOptions = $(this).val().map(Number);

            // Reset style information for all data points
            for (var i = 0; i < styleColumn.length; i++) {
                styleColumn[i] = null;
            }

            // Set style information for selected data points
            selectedOptions.forEach(function (index) {
                styleColumn[index - 1] = 'point { size: 5; fill-color: red; }';
            });

            // Create a DataView to combine the original data with the style column
            var view = new google.visualization.DataView(chartData);
            view.setColumns([0, 1, {
                type: 'string',
                role: 'style',
                calc: function (dt, row) {
                    return styleColumn[row];
                }
            }]);

            // Redraw the chart
            chart.draw(view, options);
        });

        // Initial chart drawing
        chart.draw(chartData, options);
    } else {
        console.log('No data available to create the chart.');
    }

}


function updateTable() {
    let table = document.getElementById("data-table");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    if (table.rows.length < 10) {
        enableAddButton();
    }

    deleteButtons = [];

    for (var i = 1; i < data.length; i++) {
        var row = table.insertRow(i);
        var sCell = row.insertCell(0);
        var xCell = row.insertCell(1);
        var yCell = row.insertCell(2);
        var deleteCell = row.insertCell(3);

        sCell.innerHTML = `${i}`;
        xCell.innerHTML = data[i][0];
        yCell.innerHTML = data[i][1];

        var deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.value = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = function () {
            deleteRow(this);
        };

        deleteCell.appendChild(deleteButton);
        deleteButtons.push(deleteButton);
    }
}

function disableDeleteButton() {
    for (let index = 0; index < 10; index++) {
        document.getElementsByClassName("delete-button")[index].disabled = true;
    }
}

// roundToTwoDecimalPlaces
function roundToTwoDecimalPlaces(number) {
    return Math.round(number * 100) / 100;
}
validateInputX();
function validateInputX() {
    var inputValue = document.getElementById("X").value;

    if (inputValue.includes("+") || inputValue.includes("-") || inputValue.includes("e")) {
        // alert("Please do not enter '+', '-', or 'e' characters!");
        return false;
    }

    return true;
}
validateInputY();
function validateInputY() {
    var inputValue = document.getElementById("Y").value;

    if (inputValue.includes("+") || inputValue.includes("-") || inputValue.includes("e")) {
        // alert("Please do not enter '+', '-', or 'e' characters!");
        return false;
    }

    return true;
}

// testing

function DeleteHidden() {
    var table = document.getElementById("data-table");
    var rows = table.rows;

    // Iterate through each row (skipping the header row)
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].cells;

        // Remove the delete cell (assuming it is the last cell in each row)
        if (cells.length > 0) {
            var lastCellIndex = cells.length - 1;
            var lastCell = cells[lastCellIndex];
            lastCell.style.display = "none";
        }
    }
}


document
    .getElementById("next-button")
    .addEventListener("click", function ClusterSelectionIsOn() {
        // let NonTableSection = document.getElementById("non-table-section");
        // NonTableSection.style.display = "none";
        // tabChange()
        DisplayClusterButtonSection();
        DisplayClusterSection();
        NoneCentroidAll();
        NoneDataSetAll();
        NoneComputeSection();


        let table = document.getElementById("data-table");
        let headerRow = table.querySelector("tr");
        let rows = table.querySelectorAll("tr");

        for (var i = 0; i < rows.length; i++) {
            var cells = rows[i].querySelectorAll("td, th");
            var lastCellIndex = cells.length - 1;

            if (lastCellIndex >= 0) {
                cells[lastCellIndex].parentNode.removeChild(cells[lastCellIndex]);
            }
        }
    });
document
    .getElementById("cluster-next-button")
    .addEventListener("click", function computeIsOn() {
        // let NonTableSection = document.getElementById("non-table-section");
        // NonTableSection.style.display = "none";
        // tabChange()
        disableNextButton();


        SelectCentroids();
        NoneClusterAll();
        NoneDataSetAll();
        NoneComputeSection();
        DisplaycendroidButtonSection();
        DisplaycendroidSection();
        Swal.fire({
            icon: "info",
            text: `Select any ${kVal} centroids`,
            // text: 'Duplicate values are not allowed!.',
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
    });

let numbers = '';
// centroid section next button
document
    .getElementById("cendroid-next-button")
    .addEventListener("click", function cendroidsIsOn() {
        // let NonTableSection = document.getElementById("non-table-section");
        // NonTableSection.style.display = "none";
        // tabChange()
        DisplayComputeSection();
        NoneCentroidAll();
        NoneClusterAll();
        NoneDataSetAll();
        NoneGraphSection();
        NoneTableSection();
        NonetrainingSection();
        tabChange();
        Swal.fire({
            icon: "info",
            title: "Find Euclidean distance!",
            html: 'Click on the <b style="color: #FF6600">D1</b> button.',
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
                confirmButton: "swal-button", // Add this line for the confirm button
                cancelButton: "swal-button" // Add this line for the cancel button
            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });



        for (let i = 1; i <= kVal; i++) {
            numbers += i;

            if (i !== kVal) {
                numbers += ', ';
            }

            if (i === kVal - 1) {
                numbers += 'or ';
            }
        }
    });

// tabChange()
NoneClusterAll();
NoneCentroidAll();
NoneComputeSection();
// NoneDataSetAll();
// NoneGraphSection();
// NoneTableSection();
// NonetrainingSection();

// cluster control panal
function NoneClusterSection() {
    let NoneClusterSection = document.getElementById("cluster-control");
    NoneClusterSection.style.display = "none";
}

function DisplayClusterSection() {
    let NoneClusterSection = document.getElementById("cluster-control");
    NoneClusterSection.style.display = "block";
}
function NonecendroidSection() {
    let NonecendroidSection = document.getElementById("cendroid-control");
    NonecendroidSection.style.display = "none";
}

function DisplaycendroidSection() {
    let NonecendroidSection = document.getElementById("cendroid-control");
    NonecendroidSection.style.display = "block";
}
function DisplayDataSection() {
    let DisplayDataSection = document.getElementById("training-control");
    DisplayDataSection.style.display = "block";
}
function NoneDataSection() {
    let NoneDataSection = document.getElementById("training-control");
    NoneDataSection.style.display = "none";
}
function NoneDataButtonSection() {
    let NoneDataButtonSection = document.getElementById("data-button-container");
    NoneDataButtonSection.style.display = "none";
}
function DisplayDataButtonSection() {
    let DisplayDataButtonSection = document.getElementById(
        "data-button-container"
    );
    DisplayDataButtonSection.style.display = "block";
}
function NoneClusterButtonSection() {
    let NoneClusterButtonSection = document.getElementById(
        "cluster-button-container"
    );
    NoneClusterButtonSection.style.display = "none";
}
function DisplayClusterButtonSection() {
    let DisplayClusterButtonSection = document.getElementById(
        "cluster-button-container"
    );
    DisplayClusterButtonSection.style.display = "block";
}
function NonecendroidButtonSection() {
    let NonecendroidButtonSection = document.getElementById(
        "cendroid-button-container"
    );
    NonecendroidButtonSection.style.display = "none";
}
function DisplaycendroidButtonSection() {
    let DisplaycendroidButtonSection = document.getElementById(
        "cendroid-button-container"
    );
    DisplaycendroidButtonSection.style.display = "block";
}
// table section none and display
function NoneTableSection() {
    let NoneTableSection = document.getElementById("tableId");
    NoneTableSection.style.display = "none";
}
function DisplayTableSection() {
    let DisplayTableSection = document.getElementById("tableId");
    DisplayTableSection.style.display = "block";
}
// graph section none and display
function NoneGraphSection() {
    let NoneGraphSection = document.getElementById("graphId");
    NoneGraphSection.style.display = "none";
}
function DisplayGraphSection() {
    let DisplayGraphSection = document.getElementById("graphId");
    DisplayGraphSection.style.display = "block";
}
// trainingSection section none and display
function NonetrainingSection() {
    let NonetrainingSection = document.getElementById("trainingSection");
    NonetrainingSection.style.display = "none";
}
function DisplaytrainingSection() {
    let DisplaytrainingSection = document.getElementById("trainingSection");
    DisplaytrainingSection.style.display = "block";
}
// ComputeSection section none and display
// NoneComputeSection();
function NoneComputeSection() {
    let NoneComputeSection = document.getElementById("ComputeSection");
    NoneComputeSection.style.display = "none";
}
function DisplayComputeSection() {
    let DisplayComputeSection = document.getElementById("ComputeSection");
    DisplayComputeSection.style.display = "block";
}
// ComputeSection section none and display
// NoneNextComputeButton();
// function NoneNextComputeButton() {
//     let NoneComputeSection = document.getElementById("next-compute-to-analysis");
//     NoneComputeSection.style.display = "none";
// }

// function DisplayNextComputeButton() {
//     let DisplayNextComputeButton = document.getElementById("next-compute-to-analysis");
//     DisplayNextComputeButton.style.display = "block";
// }
disableNextComputeButton();
function disableNextComputeButton() {
    let disableNextComputeButton = document.getElementById("next-compute-to-analysis");
    disableNextComputeButton.disabled = true;
}

function enableNextComputeButton() {
    let enableNextComputeButton = document.getElementById("next-compute-to-analysis");
    enableNextComputeButton.disabled = false;
}
NoneAnalysis();
function NoneAnalysis() {
    let NoneAnalysis = document.getElementById("analyseSection");
    NoneAnalysis.style.display = "none";
}
function DisplayAnalysis() {
    let DisplayAnalysis = document.getElementById("analyseSection");
    DisplayAnalysis.style.display = "block";
}

function NoneClusterAll() {
    NoneClusterButtonSection();
    NoneClusterSection();
}
function NoneDataSetAll() {
    NoneDataButtonSection();
    NoneDataSection();
}
function NoneCentroidAll() {
    NonecendroidButtonSection();
    NonecendroidSection();
}

function limitDecimals(event) {
    var input = event.target;
    var value = input.value;

    // Check if there are more than two decimal places
    if (value.indexOf(".") !== -1 && value.split(".")[1].length > 2) {
        // Remove the extra decimal places
        input.value = parseFloat(value).toFixed(2);
    }
}

const inputElement = document.getElementById('X');
inputElement.addEventListener('keydown', function (event) {
    const key = event.key;

    if (key === '+' || key === '-' || key.toLowerCase() === 'e') {
        event.preventDefault();
    }

});
const inputElementY = document.getElementById('Y');
inputElementY.addEventListener('keydown', function (event) {
    const key = event.key;

    if (key === '+' || key === '-' || key.toLowerCase() === 'e') {
        event.preventDefault();
    }

});
blockKeyboard();
function blockKeyboard() {
    let notallow = document.getElementsByClassName('select2-selection__rendered')[0];
    // notallow.color="white";
}
function checkOption() {
    var selectElement = document.getElementById("SelectCluster");
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;

    if (selectedOption === "0") {
    }
}
// $(document).ready(function () {
//     $('#SelectCluster').select2();
// });


$(document).ready(function () {
    const maxSelections = 1;

    $('#SelectCluster').on('change', function (e) {
        kVal = $(this).val();
    });
    $("#SelectCluster").select2({
        maximumSelectionLength: maxSelections,
    });
    $("#SelectCluster").on("select2:select", function (e) {
        const selectedOption = e.params.data.id;


        if (centroids.length > maxSelections) {
            const removedOption = centroids.shift();
            $(this)
                .find('option[value="' + removedOption + '"]')
                .prop("selected", false);

        }
        if (kVal.length == 1) {
            Swal.fire({
                icon: "info",
                html: 'Click on <b style="color: #FF6600">SUBMIT</b> button!',
                // text: "New clusters value shows up in specific cells.",
                customClass: {
                    container: "swal-container",
                    popup: "swal-popup",
                    title: "swal-title",
                    content: "swal-content",
                    confirmButton: "swal-button", // Add this line for the confirm button
                    cancelButton: "swal-button" // Add this line for the cancel button
                },
                target: myContainer,
                didOpen: () => {
                    const container = document.querySelector(".swal-container");
                    const containerWidth = myContainer.offsetWidth;
                    const containerHeight = myContainer.offsetHeight;

                    // Change font size based on container size
                    if (containerWidth >= 1000 && containerHeight >= 672) {
                        container.style.fontSize = "24px";
                    } else {
                        container.style.fontSize = "16px";
                    }

                    // Adjust dimensions and position of the Swal container
                    container.style.position = "absolute";
                    container.style.width = "100%";
                    container.style.height = "100%";
                    container.style.top = "0";
                    container.style.left = "0";
                    container.style.padding = "0";

                },
                showCloseButton: false, // Disable the close button
                allowOutsideClick: false, // Prevent closing by clicking outside the modal
                allowEscapeKey: false,
            });
        }
    });

});
let kVal;
function submitCluster() {
    if (kVal == null) {
        Swal.fire({
            icon: "warning",
            title: "Missing K!",
            text: "First select the value for K (no. of centroids).",
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
                confirmButton: "swal-button", // Add this line for the confirm button
                cancelButton: "swal-button" // Add this line for the cancel button
            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        return;
    }
    kVal = parseInt(kVal);

    disableclusterSubmitButton();

    function disableclusterSubmitButton() {
        let disableNextButton = document.getElementById("cluster-submit-button");
        disableNextButton.disabled = true;
    }


    if (kVal) {
        Swal.fire({
            icon: "info",
            // title: 'Missing Value!',
            html: 'Click on the <b style="color: #FF6600">NEXT</b> button.',
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        enableClusterNextButtons();
    }
    console.log(kVal);
    newClusterkVal = kVal;
    oldClusterkVal = kVal;
}

function resetCluster() {

    kVal = '';
    const selectElement = document.getElementById("SelectCluster");
    selectElement.value = "";
    selectElement.dispatchEvent(new Event("change"));


    enableclusterSubmitButton();
    disableClusterNextButtons();
}
function enableclusterSubmitButton() {
    let enableclusterSubmitButton = document.getElementById("cluster-submit-button");
    enableclusterSubmitButton.disabled = false;
}
// --------------------------------------------------------------------------------------------------------------
let centroids = [];
// let count = 0;
function SelectCentroids() {
    if (kVal == centroids.length) {
        Swal.fire({
            icon: "info",
            // title: 'Select Centroids!',
            html: 'Please click the <b style="color: #FF6600">NEXT</b> button.',
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        return;
    }
    $(document).ready(function () {
        const maxSelections = kVal;

        $('#Selectcendroid').on('change', function (e) {
            centroids = $(this).val();
            highlightRows(centroids);
            console.log('Selected Options:', centroids);
        });
        $("#Selectcendroid").select2({
            maximumSelectionLength: maxSelections,
        });
        $("#Selectcendroid").on("select2:select", function (e) {
            const selectedOption = e.params.data.id;

            // centroids = sortArray(checkAndRemoveDuplicateValue(centroids, selectedOption))

            if (centroids.length > maxSelections) {
                const removedOption = centroids.shift();
                $(this)
                    .find('option[value="' + removedOption + '"]')
                    .prop("selected", false);

            }

            // console.log("Selected Options:", centroids);

            let enableNextButton = document.getElementById("cendroid-submit-button");
            if (centroids.length == kVal) {
                enableNextButton.disabled = false;

                Swal.fire({
                    icon: "info",
                    html: 'Click on <b style="color: #FF6600">SUBMIT</b> button!',
                    // text: "New clusters value shows up in specific cells.",
                    customClass: {
                        container: "swal-container",
                        popup: "swal-popup",
                        title: "swal-title",
                        content: "swal-content",
                        confirmButton: "swal-button", // Add this line for the confirm button
                        cancelButton: "swal-button" // Add this line for the cancel button
                    },
                    target: myContainer,
                    didOpen: () => {
                        const container = document.querySelector(".swal-container");
                        const containerWidth = myContainer.offsetWidth;
                        const containerHeight = myContainer.offsetHeight;

                        // Change font size based on container size
                        if (containerWidth >= 1000 && containerHeight >= 672) {
                            container.style.fontSize = "24px";
                        } else {
                            container.style.fontSize = "16px";
                        }

                        // Adjust dimensions and position of the Swal container
                        container.style.position = "absolute";
                        container.style.width = "100%";
                        container.style.height = "100%";
                        container.style.top = "0";
                        container.style.left = "0";
                        container.style.padding = "0";

                    },
                    showCloseButton: false, // Disable the close button
                    allowOutsideClick: false, // Prevent closing by clicking outside the modal
                    allowEscapeKey: false,
                });
            }
            else {
                enableNextButton.disabled = true;
                console.log(centroids.length)
                console.log(kVal)

            }
        });

    });
    // Prompt to change the value of k if kVal is equal to count
}

function sortArray(arr) {
    // Use the sort() method to sort the array in place
    arr.sort(function (a, b) {
        return a - b;
    });

    return arr;
}

function disableNextButton() {

    let disableNextButton = document.getElementById("cendroid-submit-button");

    disableNextButton.disabled = true;

}

function checkDuplicateValue(arr, value) {
    return arr.includes(value);
}

function checkAndRemoveDuplicateValue(arr, value) {
    const uniqueSet = new Set(arr); // Create a Set from the array to remove duplicates
    const isDuplicate = uniqueSet.has(value); // Check if the value already exists in the Set

    if (isDuplicate) {
        // uniqueSet.delete(value); // Remove the value from the Set
        console.log("Duplicate removed");
        // return;
    } else {
        uniqueSet.add(value); // Add the value to the Set
        console.log("Value added");
    }

    const uniqueArray = Array.from(uniqueSet); // Convert the Set back to an array
    return uniqueArray;
}



let yes = true;

// let FirstCentroids = [];

let firstcentroidsIndex = [];
function submitCendroid() {
    console.log(kVal === centroids.length);
    console.log(centroids.length);
    firstcentroidsIndex = centroids;
    if (kVal === centroids.length) {
        promptToChangeCentroids();
    }
    let centroidVal = []; // Define centroidVal array
    for (let index = 0; index < centroids.length; index++) {
        centroidVal.push(data[Number(centroids[index])]);
    }
    centroids = centroidVal;



    console.log(centroidVal); // Display centroidVal array
    console.log(centroids); // Display centroidVal array
}

let chnageTextClusterIntoNewClusterCounter = 0;
function showCentroids(centroids) {
    let show = document.getElementById("cenroidsContainerOld");
    show.innerHTML = "";
    const centroidLine = document.createElement("div");
    centroidLine.innerText = chnageTextClusterIntoNewClusterCounter > 0 ? `Old Centroids` : `Centroids`;
    show.appendChild(centroidLine);
    centroids.forEach((centroid, index) => {
        const centroidLine = document.createElement("p");
        // centroidLine.style.display = "block";
        centroidLine.innerText = `C${index + 1} = (${centroid.join(", ")})`;
        show.appendChild(centroidLine);
    });
    const centroidLineNew = document.createElement("div");
    // centroidLineNew.innerText = `New Centroids`;
    show.appendChild(centroidLineNew);
}


function highlightRows(centroids) {
    let table = document.getElementById("data-table");
    let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let sNo = row.cells[0].innerText.trim(); // Get the S. NO. value from the first cell

        if (centroids.includes(sNo)) {
            row.classList.add("selected");

            let cells = row.getElementsByTagName("td");
            for (let j = 0; j < cells.length; j++) {
                cells[j].style.border = "#FF6600 3px solid";
            }
        } else {
            row.classList.remove("selected");

            let cells = row.getElementsByTagName("td");
            for (let j = 0; j < cells.length; j++) {
                console.log("hello else");
                cells[j].style.border = ""; // Reset the border
            }
        }
    }
}

function resetSelectOptions() {
    centroids = [];
    const selectElement = document.getElementById("Selectcendroid");
    selectElement.value = "";
    selectElement.dispatchEvent(new Event("change"));

    let table = document.getElementById("data-table");
    let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let sNo = row.cells[0].innerText.trim(); // Get the S. NO. value from the first cell

        if (centroids.includes(sNo)) {
            row.classList.add("selected");

            let cells = row.getElementsByTagName("td");
            for (let j = 0; j < cells.length; j++) {
                cells[j].style.border = "#FF6600 3px solid";
            }
        } else {
            row.classList.remove("selected");

            let cells = row.getElementsByTagName("td");
            for (let j = 0; j < cells.length; j++) {
                console.log("hello else");
                cells[j].style.border = ""; // Reset the border
            }
        }
    }
    disableCendroidNextButtons();

}





HighLightingHeadingOfTable();
function HighLightingHeadingOfTable() {
    // Get the table element
    let table = document.getElementById("data-table");

    // Get all the rows in the table body
    let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    // Iterate over the rows
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];

        if (i === 0) {
            console.log("Selected row:", row);
            row.style.backgroundColor = "#d8e9f0";
        }
    }
}

HighLightingHeadingOfTable_ForCompute();
function HighLightingHeadingOfTable_ForCompute() {
    // Get the table element
    let table = document.getElementById("data-table-compute");

    // Get all the rows in the table body
    let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    // Iterate over the rows
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];

        if (i === 0) {
            console.log("Selected row:", row);
            row.style.backgroundColor = "#d8e9f0";
        }
    }
}
HighLightingHeadingOfTable_ForAnalysis();
function HighLightingHeadingOfTable_ForAnalysis() {
    // Get the table element
    let table = document.getElementById("data-table-analysis");

    // Get all the rows in the table body
    let rows = table.getElementsByTagName("thead")[0].getElementsByTagName("tr");

    // Iterate over the rows
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];

        if (i === 0) {
            console.log("Selected row:", row);
            row.style.backgroundColor = "#d8e9f0";
        }
    }
}

function promptToChangeCentroids() {
    Swal.fire({
        // title: 'Delete Rows',
        text: "Do you want to change Centroids Value?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        customClass: {
            container: "swal-container",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
        },
        target: myContainer,
        didOpen: () => {
            const container = document.querySelector(".swal-container");
            const containerWidth = myContainer.offsetWidth;
            const containerHeight = myContainer.offsetHeight;

            // Change font size based on container size
            if (containerWidth >= 1000 && containerHeight >= 672) {
                container.style.fontSize = "24px";
            } else {
                container.style.fontSize = "16px";
            }

            // Adjust dimensions and position of the Swal container
            container.style.position = "absolute";
            container.style.width = "100%";
            container.style.height = "100%";
            container.style.top = "0";
            container.style.left = "0";
            container.style.padding = "0";

        },
        showCloseButton: false, // Disable the close button
        allowOutsideClick: false, // Prevent closing by clicking outside the modal
        allowEscapeKey: false, // Prevent closing by pressing the escape key
    }).then((result) => {
        if (result.isConfirmed) {
            count = 0;
            centroids = [];
            // Get the table element
            let table = document.getElementById("data-table");

            // Get all the rows in the table body
            let rows = table
                .getElementsByTagName("tbody")[0]
                .getElementsByTagName("tr");

            // Iterate over the rows
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                // row.style.backgroundColor = 'white';
                let cells = row.getElementsByTagName("td");
                for (let j = 0; j < cells.length; j++) {
                    cells[j].style.borderColor = "black";
                    cells[j].style.borderWidth = "1px";
                }
            }
            resetSelectOptions();
        } else {

            enableCendroidNextButtons();
            DisableCendroidSubmitButton();

            calcomputer();
            showCentroids(centroids);

        }
    });

}

// compute functions
function updateTableForCompute() {
    var table = document.getElementById("data-table-compute");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    if (table.rows.length < 10) {
        enableAddButton();
    }

    deleteButtons = [];

    for (var i = 1; i < data.length; i++) {
        var row = table.insertRow(i);
        var sCell = row.insertCell(0);
        var xCell = row.insertCell(1);
        var yCell = row.insertCell(2);
        // var C1 = row.insertCell(3);
        // var C2 = row.insertCell(3);
        // var cluster = row.insertCell(kVal + 3);
        // var NewCluster = row.insertCell(3);

        sCell.innerHTML = `${i}`;
        xCell.innerHTML = data[i][0];
        yCell.innerHTML = data[i][1];


    }
}

function resetCentroidSection() {
    resetSelectOptions();
}


// c1 button
function enableC1computeButton() {
    document.getElementById("c1compute").disabled = false;
}
function DisableC1computeButton() {
    document.getElementById("c1compute").disabled = true;
}

// c2 button
DisableC2computeButton();
function enableC2computeButton() {
    document.getElementById("c2compute").disabled = false;
}
function DisableC2computeButton() {
    document.getElementById("c2compute").disabled = true;
}

function enableC3computeButton() {
    document.getElementById("c3compute").disabled = false;
}
DisableC3computeButton();
function DisableC3computeButton() {
    document.getElementById("c3compute").disabled = true;
}
DisableC4computeButton();
function enableC4computeButton() {
    document.getElementById("c4compute").disabled = false;
}
function DisableC4computeButton() {
    document.getElementById("c4compute").disabled = true;
}

// enableHighLightClusterAll();

function enableHighLightClusterAll() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            row.cells[oldClusterkVal + 3].style.border = "3px solid green";
        });
}
function disableHighLightClusterAll() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            row.cells[oldClusterkVal + 3].style.border = "";
        });
}
function enableHighLightNewClusterAll() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            row.cells[newClusterkVal + 4].style.border = "3px solid green";
        });
}
function disableHighLightNewClusterAll() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            row.cells[newClusterkVal + 4].style.border = "";
        });
}
function enableHighLightC1() {
    console.log('checkkkkk')
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            row.cells[3].style.border = "3px solid #FF6600";
        });
}
function disableHighLightC1() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            if (row.cells[3]) {
                row.cells[3].style.border = "1px solid white";
            }
        });
}

function enableHighLightC2() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            if (row.cells[4]) {
                row.cells[4].style.border = "3px solid #FF6600";
            }
        });
}
disableHighLightC2();
function disableHighLightC2() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            if (row.cells[4]) {

                row.cells[4].style.border = "1px solid white";
            }
        });
}
// c3
function enableHighLightC3() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            row.cells[5].style.border = "3px solid #FF6600";
        });
}
disableHighLightC3();
function disableHighLightC3() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            if (row.cells[5]) {

                row.cells[5].style.border = "1px solid white";
            }
        });
}

// c4
function enableHighLightC4() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            row.cells[6].style.border = "3px solid #FF6600";
        });
}
disableHighLightC4();
function disableHighLightC4() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            if (row.cells[6]) {

                row.cells[6].style.border = "1px solid white";
            }
        });
}

function enableHighLightK() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            row.cells[kVal + 3].style.border = "3px solid #FF6600";
        });
}
// disableHighLightK();
function disableHighLightK() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            row.cells[kVal + 3].style.border = "1px solid white";
        });
}

function euclideanDistance(pointA, pointB) {
    let sum = 0;
    for (let i = 0; i < pointA.length; i++) {
        sum += Math.pow(pointA[i] - pointB[i], 2);
    }
    return Math.sqrt(sum);
}

function roundToTwoDecimalPlaces(number) {
    return Math.round(number * 100) / 100;
}

function fillCValues(centroidIndex) {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            const x = parseFloat(row.cells[1].textContent);
            const y = parseFloat(row.cells[2].textContent);
            const distance = euclideanDistance([x, y], centroids[centroidIndex]);

            const cellIndex = 3 + centroidIndex;
            const targetCell = row.cells[cellIndex];

            if (targetCell) {
                targetCell.textContent = roundToTwoDecimalPlaces(distance);
            } else {
                const newCell = row.insertCell(cellIndex);
                newCell.textContent = roundToTwoDecimalPlaces(distance);
            }
        });
}

function disableComputeButton(centroidIndex) {
    const computeButton = document.getElementById(`c${centroidIndex + 1}compute`);
    computeButton.disabled = true;
}

function enableComputeButton(centroidIndex) {
    const computeButton = document.getElementById(`c${centroidIndex + 1}compute`);
    computeButton.disabled = false;
}

function highlightCentroid(centroidIndex) {
    const cHeaders = document.querySelectorAll("#data-table-compute th[id^='c']");
    cHeaders.forEach((header, index) => {
        if (index === centroidIndex) {
            header.style.backgroundColor = "#ffdd00";
        } else {
            header.style.backgroundColor = "";
        }
    });
}

let countIteration = 0;

document.getElementById("c1compute").addEventListener("click", function () {
    fillCValues(0);

    disableComputeButton(0);
    enableComputeButton(1);
    disableHighLightC1();
    enableHighLightC1();
    countIteration++;
    setTimeout(function () {

        Swal.fire({
            icon: "info",
            title: "Find Euclidean distance!",
            html: 'Click on the <b style="color: #FF6600">D2</b> button.',
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
                confirmButton: "swal-button", // Add this line for the confirm button
                cancelButton: "swal-button" // Add this line for the cancel button
            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        console.log("After 5 seconds");
    }, 500);

});

document.getElementById("c2compute").addEventListener("click", function () {
    fillCValues(1);

    disableComputeButton(1);
    enableComputeButton(2);
    disableHighLightC1();
    enableHighLightC2();
    if (kVal == 2) {
        TableCluster();
        Khigh();
        highlightNextCell();
        // highlightNextCelltemp();

    }
    countIteration++;
    if (kVal > 2) {
        setTimeout(function () {

            Swal.fire({
                icon: "info",
                title: "Find Euclidean distance!",
                html: 'Click on <b style="color: #FF6600">D3</b> button.',
                customClass: {
                    container: "swal-container",
                    popup: "swal-popup",
                    title: "swal-title",
                    content: "swal-content",
                    confirmButton: "swal-button", // Add this line for the confirm button
                    cancelButton: "swal-button" // Add this line for the cancel button
                },
                target: myContainer,
                didOpen: () => {
                    const container = document.querySelector(".swal-container");
                    const containerWidth = myContainer.offsetWidth;
                    const containerHeight = myContainer.offsetHeight;

                    // Change font size based on container size
                    if (containerWidth >= 1000 && containerHeight >= 672) {
                        container.style.fontSize = "24px";
                    } else {
                        container.style.fontSize = "16px";
                    }

                    // Adjust dimensions and position of the Swal container
                    container.style.position = "absolute";
                    container.style.width = "100%";
                    container.style.height = "100%";
                    container.style.top = "0";
                    container.style.left = "0";
                    container.style.padding = "0";

                },
                showCloseButton: false, // Disable the close button
                allowOutsideClick: false, // Prevent closing by clicking outside the modal
                allowEscapeKey: false,
            });
            console.log("After 5 seconds");
        }, 500);
    }
});

document.getElementById("c3compute").addEventListener("click", function () {
    fillCValues(2);

    disableComputeButton(2);
    enableComputeButton(3);
    disableHighLightC2();
    enableHighLightC3();
    if (kVal == 3) {
        TableCluster();
        Khigh();
        highlightNextCell();
        // highlightNextCelltemp();

    }
    countIteration++;
    if (kVal > 3) {
        setTimeout(function () {

            Swal.fire({
                icon: "info",
                title: "Find Euclidean distance!",
                html: 'Click on <b style="color: #FF6600">D4</b> button.',
                customClass: {
                    container: "swal-container",
                    popup: "swal-popup",
                    title: "swal-title",
                    content: "swal-content",
                    confirmButton: "swal-button", // Add this line for the confirm button
                    cancelButton: "swal-button" // Add this line for the cancel button
                },
                target: myContainer,
                didOpen: () => {
                    const container = document.querySelector(".swal-container");
                    const containerWidth = myContainer.offsetWidth;
                    const containerHeight = myContainer.offsetHeight;

                    // Change font size based on container size
                    if (containerWidth >= 1000 && containerHeight >= 672) {
                        container.style.fontSize = "24px";
                    } else {
                        container.style.fontSize = "16px";
                    }

                    // Adjust dimensions and position of the Swal container
                    container.style.position = "absolute";
                    container.style.width = "100%";
                    container.style.height = "100%";
                    container.style.top = "0";
                    container.style.left = "0";
                    container.style.padding = "0";

                },
                showCloseButton: false, // Disable the close button
                allowOutsideClick: false, // Prevent closing by clicking outside the modal
                allowEscapeKey: false,
            });
            console.log("After 5 seconds");
        }, 500);
    }

});

document.getElementById("c4compute").addEventListener("click", function () {
    fillCValues(3);

    disableComputeButton(3);
    // TableCluster();
    disableHighLightC3();
    enableHighLightC4();
    if (kVal == 4) {
        TableCluster();
        Khigh();
        highlightNextCell();

    }
    // highlightNextCelltemp();
    countIteration++;

});

function calcomputer() {
    const computeButtonContainer = document.querySelector(
        ".computeButtonContainer"
    );
    const cButtons = computeButtonContainer.querySelectorAll(".button");

    for (let i = 1; i <= 4; i++) {
        const cButton = document.getElementById(`c${i}compute`);
        if (i <= kVal) {
            cButton.style.display = "inline-block";
        } else {
            cButton.style.display = "none";
        }
    }
    for (let i = 1; i <= 4; i++) {
        const cHead = document.getElementById(`c${i}-header`);
        if (i <= kVal) {
            cHead.style.display = "table-cell";
        } else {
            cHead.style.display = "none";
        }
    }
}



let TotalStepCentroids = []
let TotalStepCluster = []
let clusterOld = []


let currentCellIndex = 1;
let clusterAll = []
function editCell(cell) {


    let PopUpTitle = updateTitle();
    const highlightedCell = document.querySelector('.highlight div');

    if (cell !== highlightedCell) {
        highlightedCell.style.cursor = "not-allowed";
        return; // Ignore clicks on non-highlighted cells
    }

    Swal.fire({
        position: 'top-end',
        title: "Enter the value",
        text: `Index of ${PopUpTitle}`,
        input: "number",
        inputValue: cell.innerText,
        inputAttributes: {
            min: 1,
            max: Infinity,
        },
        showCancelButton: true,
        confirmButtonText: "SUBMIT",
        cancelButtonText: "CANCEL",
        allowOutsideClick: false,
        customClass: {
            container: "swal-container",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
            confirmButton: "swal-confirm-button",
            cancelButton: "swal-cancel-button",
        },
        target: myContainer,
        didOpen: () => {
            const container = document.querySelector(".swal-container");
            const containerWidth = myContainer.offsetWidth;
            const containerHeight = myContainer.offsetHeight;

            // Change font size based on container size
            if (containerWidth >= 1000 && containerHeight >= 672) {
                container.style.fontSize = "24px";
            } else {
                container.style.fontSize = "16px";
            }

            // Adjust dimensions and position of the Swal container
            container.style.position = "absolute";
            container.style.width = "100%";
            container.style.height = "100%";
            container.style.top = "0";
            container.style.left = "0";
            container.style.padding = "0";
        },
        showCloseButton: false, // Disable the close button
        allowOutsideClick: false, // Prevent closing by clicking outside the modal
        allowEscapeKey: false, // Prevent closing by pressing the escape key
        preConfirm: (input) => {
            if (input.trim() === "") {
                cell.innerText = 'K';
                Swal.fire({
                    icon: "error",
                    title: "Missing Values!",
                    text: "Please enter value for Cluster.",
                    customClass: {
                        container: "swal-container",
                        popup: "swal-popup",
                        title: "swal-title",
                        content: "swal-content",
                        confirmButton: "swal-button", // Add this line for the confirm button
                        cancelButton: "swal-button" // Add this line for the cancel button

                    },
                    target: myContainer,
                    didOpen: () => {
                        const container = document.querySelector(".swal-container");
                        const containerWidth = myContainer.offsetWidth;
                        const containerHeight = myContainer.offsetHeight;

                        // Change font size based on container size
                        if (containerWidth >= 1000 && containerHeight >= 672) {
                            container.style.fontSize = "24px";
                        } else {
                            container.style.fontSize = "16px";
                        }

                        // Adjust dimensions and position of the Swal container
                        container.style.position = "absolute";
                        container.style.width = "100%";
                        container.style.height = "100%";
                        container.style.top = "0";
                        container.style.left = "0";
                        container.style.padding = "0";

                    },
                    showCloseButton: false, // Disable the close button
                    allowOutsideClick: false, // Prevent closing by clicking outside the modal
                    allowEscapeKey: false, // Prevent closing by pressing the escape key

                });
            } else if (input < 1 || input > kVal) {
                cell.innerText = 'K';
                Swal.fire({
                    title: "Incorrect value!",
                    text: `Please enter a number, either ${numbers}`,
                    icon: "error",
                    customClass: {
                        container: "swal-container",
                        popup: "swal-popup",
                        title: "swal-title",
                        content: "swal-content",
                        confirmButton: "swal-button", // Add this line for the confirm button
                        cancelButton: "swal-button" // Add this line for the cancel button


                    },
                    target: myContainer,
                    didOpen: () => {
                        const container = document.querySelector(".swal-container");
                        const containerWidth = myContainer.offsetWidth;
                        const containerHeight = myContainer.offsetHeight;

                        // Change font size based on container size
                        if (containerWidth >= 1000 && containerHeight >= 672) {
                            container.style.fontSize = "24px";
                        } else {
                            container.style.fontSize = "16px";
                        }

                        // Adjust dimensions and position of the Swal container
                        container.style.position = "absolute";
                        container.style.width = "100%";
                        container.style.height = "100%";
                        container.style.top = "0";
                        container.style.left = "0";
                        container.style.padding = "0";


                    },
                    showCloseButton: false, // Disable the close button
                    allowOutsideClick: false, // Prevent closing by clicking outside the modal
                    allowEscapeKey: false, // Prevent closing by pressing the escape key

                });

            } else if (input > kVal) {
                cell.innerText = 'K';
                Swal.fire({
                    title: "Incorrect value!",
                    text: `Please enter a number between 1 and ${kVal}.`,
                    icon: "error",
                    customClass: {
                        container: "swal-container",
                        popup: "swal-popup",
                        title: "swal-title",
                        content: "swal-content",
                        confirmButton: "swal-button", // Add this line for the confirm button
                        cancelButton: "swal-button" // Add this line for the cancel button


                    },
                    target: myContainer,
                    didOpen: () => {
                        const container = document.querySelector(".swal-container");
                        const containerWidth = myContainer.offsetWidth;
                        const containerHeight = myContainer.offsetHeight;

                        // Change font size based on container size
                        if (containerWidth >= 1000 && containerHeight >= 672) {
                            container.style.fontSize = "24px";
                        } else {
                            container.style.fontSize = "16px";
                        }

                        // Adjust dimensions and position of the Swal container
                        container.style.position = "absolute";
                        container.style.width = "100%";
                        container.style.height = "100%";
                        container.style.top = "0";
                        container.style.left = "0";
                        container.style.padding = "0";


                    },
                    showCloseButton: false, // Disable the close button
                    allowOutsideClick: false, // Prevent closing by clicking outside the modal
                    allowEscapeKey: false, // Prevent closing by pressing the escape key

                });

            }
            return input.trim();
        },
    }).then((result) => {
        if (result.isConfirmed) {
            cell.innerText = result.value;
            const parsedResult = parseInt(result.value);

            const dataRow = cell.parentNode.parentNode;
            const rowCells = dataRow.cells;
            const firstCell = rowCells[3];
            const secondCell = rowCells[4];
            const thirdCell = rowCells[5];
            const fourthCell = rowCells[6];



            let values = [];
            if (kVal === 2) {
                values = [
                    parseFloat(firstCell.textContent),
                    parseFloat(secondCell.textContent),
                ];
            } else if (kVal === 3) {
                values = [
                    parseFloat(firstCell.textContent),
                    parseFloat(secondCell.textContent),
                    parseFloat(thirdCell.textContent),
                ];
            } else if (kVal === 4) {
                values = [
                    parseFloat(firstCell.textContent),
                    parseFloat(secondCell.textContent),
                    parseFloat(thirdCell.textContent),
                    parseFloat(fourthCell.textContent),
                ];
            }

            const minValue = Math.min(...values);
            const calculatedKvalue = values.indexOf(minValue) + 1;
            const parsedKvalue = parseInt(calculatedKvalue);

            // Compare each value in the 'values' array against all other values
            const hasDuplicateValues = values.some((value, index) => {
                return values.slice(index + 1).some(otherValue => value === otherValue);
            });
            if (parsedResult === parsedKvalue) {
                clusterAll.push(parsedKvalue);
                Swal.fire({
                    title: "Correct value!",
                    text: `Click on the next highlighted cell (K) and enter the value.`,
                    icon: "success",
                    customClass: {
                        container: "swal-container",
                        popup: "swal-popup",
                        title: "swal-title",
                        content: "swal-content",
                        confirmButton: "swal-button", // Add this line for the confirm button
                        cancelButton: "swal-button" // Add this line for the cancel button

                    },
                    target: myContainer,
                    didOpen: () => {
                        const container = document.querySelector(".swal-container");
                        const containerWidth = myContainer.offsetWidth;
                        const containerHeight = myContainer.offsetHeight;

                        // Change font size based on container size
                        if (containerWidth >= 1000 && containerHeight >= 672) {
                            container.style.fontSize = "24px";
                        } else {
                            container.style.fontSize = "16px";
                        }

                        // Adjust dimensions and position of the Swal container
                        container.style.position = "absolute";
                        container.style.width = "100%";
                        container.style.height = "100%";
                        container.style.top = "0";
                        container.style.left = "0";
                        container.style.padding = "0";

                    },
                    showCloseButton: false, // Disable the close button
                    allowOutsideClick: false, // Prevent closing by clicking outside the modal
                    allowEscapeKey: false, // Prevent closing by pressing the escape key


                });
            }



            // If duplicate values are found, show an alert
            else if (hasDuplicateValues) {
                cell.innerText = 'K';
                Swal.fire({
                    title: "Incorrect value!",
                    text: `Due to a tie in distance values, preference was given to the first entry. Please enter the value accordingly.`,
                    icon: "error",
                    customClass: {
                        container: "swal-container",
                        popup: "swal-popup-tri",
                        title: "swal-title",
                        content: "swal-content",
                        confirmButton: "swal-button",
                        cancelButton: "swal-button" // Add this line for the cancel button

                    },
                    target: myContainer,
                    didOpen: () => {
                        const container = document.querySelector(".swal-container");
                        const containerWidth = myContainer.offsetWidth;
                        const containerHeight = myContainer.offsetHeight;

                        // Change font size based on container size
                        if (containerWidth >= 1000 && containerHeight >= 672) {
                            container.style.fontSize = "24px";
                        } else {
                            container.style.fontSize = "16px";
                        }

                        // Adjust dimensions and position of the Swal container
                        container.style.position = "absolute";
                        container.style.width = "100%";
                        container.style.height = "100%";
                        container.style.top = "0";
                        container.style.left = "0";
                        container.style.padding = "0";

                    },
                    showCloseButton: false, // Disable the close button
                    allowOutsideClick: false, // Prevent closing by clicking outside the modal
                    allowEscapeKey: false,


                });
                return;
            } else {
                cell.innerText = 'K';
                Swal.fire({
                    title: "Incorrect value!",
                    text: ` Follow step 9 of the INSTRUCTIONS.`,
                    icon: "error",
                    customClass: {
                        container: "swal-container",
                        popup: "swal-popup",
                        title: "swal-title",
                        content: "swal-content",
                        confirmButton: "swal-button", // Add this line for the confirm button
                        cancelButton: "swal-button" // Add this line for the cancel button

                    },
                    target: myContainer,
                    didOpen: () => {
                        const container = document.querySelector(".swal-container");
                        const containerWidth = myContainer.offsetWidth;
                        const containerHeight = myContainer.offsetHeight;

                        // Change font size based on container size
                        if (containerWidth >= 1000 && containerHeight >= 672) {
                            container.style.fontSize = "24px";
                        } else {
                            container.style.fontSize = "16px";
                        }

                        // Adjust dimensions and position of the Swal container
                        container.style.position = "absolute";
                        container.style.width = "100%";
                        container.style.height = "100%";
                        container.style.top = "0";
                        container.style.left = "0";
                        container.style.padding = "0";

                    },
                    showCloseButton: false, // Disable the close button
                    allowOutsideClick: false, // Prevent closing by clicking outside the modal
                    allowEscapeKey: false,


                });
                return;
            }

            cell.parentNode.classList.remove('highlight');
            cell.parentNode.classList.add('disabled');
            currentCellIndex++;
            highlightNextCell();
            console.log(currentCellIndex);
            if (currentCellIndex == 11) {
                enableNewCentroidButton();
                beforeClusterCheck();
                if (checkArraysEqual(clusterAll, clusterOld)) {
                    enableHighLightClusterAll();
                    enableHighLightNewClusterAll();
                    Swal.fire({
                        title: "Old Clusters and New Clusters are matched!",
                        html: 'Now click on the <b style="color: #FF6600">NEXT</b> button.',
                        icon: "success",
                        customClass: {
                            container: "swal-container",
                            popup: "swal-popup",
                            title: "swal-title",
                            content: "swal-content",
                            confirmButton: "swal-button", // Add this line for the confirm button
                            cancelButton: "swal-button" // Add this line for the cancel button

                        },
                        target: myContainer,
                        didOpen: () => {
                            const container = document.querySelector(".swal-container");
                            const containerWidth = myContainer.offsetWidth;
                            const containerHeight = myContainer.offsetHeight;

                            // Change font size based on container size
                            if (containerWidth >= 1000 && containerHeight >= 672) {
                                container.style.fontSize = "24px";
                            } else {
                                container.style.fontSize = "16px";
                            }

                            // Adjust dimensions and position of the Swal container
                            container.style.position = "absolute";
                            container.style.width = "100%";
                            container.style.height = "100%";
                            container.style.top = "0";
                            container.style.left = "0";
                            container.style.padding = "0";
                        },
                        showCloseButton: false, // Disable the close button
                        allowOutsideClick: false, // Prevent closing by clicking outside the modal
                        allowEscapeKey: false,
                    });
                    // updateTableForNewCluster();
                    DisableNewCentroidButton();
                    // DisplayNextComputeButton();
                    enableNextComputeButton();
                    return;

                }
                if (!checkArraysEqual(clusterAll, clusterOld)) {
                    // alert("checkArraysEqual")
                    console.log("!checkArraysEqual");
                    Swal.fire({
                        icon: "error",
                        title: "New cluster and Old cluster are not matched!",
                        html: 'Now click on <b style="color: #FF6600">CENTROIDS</b> button.',
                        customClass: {
                            container: "swal-container",
                            popup: "swal-popup",
                            title: "swal-title",
                            content: "swal-content",
                            confirmButton: "swal-button", // Add this line for the confirm button
                            cancelButton: "swal-button" // Add this line for the cancel button

                        },
                        target: myContainer,
                        didOpen: () => {
                            const container = document.querySelector(".swal-container");
                            const containerWidth = myContainer.offsetWidth;
                            const containerHeight = myContainer.offsetHeight;

                            // Change font size based on container size
                            if (containerWidth >= 1000 && containerHeight >= 672) {
                                container.style.fontSize = "24px";
                            } else {
                                container.style.fontSize = "16px";
                            }

                            // Adjust dimensions and position of the Swal container
                            container.style.position = "absolute";
                            container.style.width = "100%";
                            container.style.height = "100%";
                            container.style.top = "0";
                            container.style.left = "0";
                            container.style.padding = "0";
                        },
                        showCloseButton: false, // Disable the close button
                        allowOutsideClick: false, // Prevent closing by clicking outside the modal
                        allowEscapeKey: false,
                    });
                    HighLightRowsOfCluster();

                    findNewCentroids(data, centroids);
                }
                currentCluster++;
                console.log("currentCluster", currentCluster);
                if (alertCount < 2) {
                    Swal.fire({
                        title: "Find the Centroids",
                        html: 'Now click on the <b style="color: #FF6600">CENTROIDS</b> button.',
                        icon: "info",
                        customClass: {
                            container: "swal-container",
                            popup: "swal-popup",
                            title: "swal-title",
                            content: "swal-content",
                            confirmButton: "swal-button", // Add this line for the confirm button
                            cancelButton: "swal-button" // Add this line for the cancel button

                        },
                        target: myContainer,
                        didOpen: () => {
                            const container = document.querySelector(".swal-container");
                            const containerWidth = myContainer.offsetWidth;
                            const containerHeight = myContainer.offsetHeight;

                            // Change font size based on container size
                            if (containerWidth >= 1000 && containerHeight >= 672) {
                                container.style.fontSize = "24px";
                            } else {
                                container.style.fontSize = "16px";
                            }

                            // Adjust dimensions and position of the Swal container
                            container.style.position = "absolute";
                            container.style.width = "100%";
                            container.style.height = "100%";
                            container.style.top = "0";
                            container.style.left = "0";
                            container.style.padding = "0";
                        },
                        showCloseButton: false, // Disable the close button
                        allowOutsideClick: false, // Prevent closing by clicking outside the modal
                        allowEscapeKey: false, // Prevent closing by pressing the escape key

                    });

                }
            }

        }
    });


}








function highlightNextCell() {
    const dataTableCompute = document.getElementById("data-table-compute");

    const dataRows = dataTableCompute.querySelectorAll("tbody tr");
    if (currentCellIndex < dataRows.length) {
        const cell = dataRows[currentCellIndex].cells[oldClusterkVal + 3];

        cell.classList.remove('disable-cursor');
        cell.classList.add('highlight');
        console.log("i am highlightNextCell", currentCellIndex, oldClusterkVal + 3);
    }
}

// highlightNextCell();



function updateTitle() {
    const columnCount = kVal;
    const columnNumbers = Array.from({ length: columnCount }, (_, i) => i + 1);
    const title = `MIN(D${columnNumbers.join(", D")})`;
    return title;
}





function Khigh() {
    if (kVal === 4) {
        setTimeout(function () {
            Swal.fire({
                icon: "info",
                title: "Insert Cluster value!",
                text: "Click on the highlighted cell (K) and enter the value.",
                customClass: {
                    container: "swal-container",
                    popup: "swal-popup",
                    title: "swal-title",
                    content: "swal-content",
                    confirmButton: "swal-button", // Add this line for the confirm button
                    cancelButton: "swal-button" // Add this line for the cancel button

                },
                target: myContainer,
                didOpen: () => {
                    const container = document.querySelector(".swal-container");
                    const containerWidth = myContainer.offsetWidth;
                    const containerHeight = myContainer.offsetHeight;

                    // Change font size based on container size
                    if (containerWidth >= 1000 && containerHeight >= 672) {
                        container.style.fontSize = "24px";
                    } else {
                        container.style.fontSize = "16px";
                    }

                    // Adjust dimensions and position of the Swal container
                    container.style.position = "absolute";
                    container.style.width = "100%";
                    container.style.height = "100%";
                    container.style.top = "0";
                    container.style.left = "0";
                    container.style.padding = "0";

                },
                showCloseButton: false, // Disable the close button
                allowOutsideClick: false, // Prevent closing by clicking outside the modal
                allowEscapeKey: false,
            });
        }, 500);
        disableHighLightC4();
        // enableHighLightK();
        return
    }
    else if (kVal === 3) {
        setTimeout(function () {
            Swal.fire({
                icon: "info",
                title: "Insert Cluster value!",
                text: "Click on the highlighted cell (K) and enter the value.",
                customClass: {
                    container: "swal-container",
                    popup: "swal-popup",
                    title: "swal-title",
                    content: "swal-content",
                    confirmButton: "swal-button", // Add this line for the confirm button
                    cancelButton: "swal-button" // Add this line for the cancel button

                },
                target: myContainer,
                didOpen: () => {
                    const container = document.querySelector(".swal-container");
                    const containerWidth = myContainer.offsetWidth;
                    const containerHeight = myContainer.offsetHeight;

                    // Change font size based on container size
                    if (containerWidth >= 1000 && containerHeight >= 672) {
                        container.style.fontSize = "24px";
                    } else {
                        container.style.fontSize = "16px";
                    }

                    // Adjust dimensions and position of the Swal container
                    container.style.position = "absolute";
                    container.style.width = "100%";
                    container.style.height = "100%";
                    container.style.top = "0";
                    container.style.left = "0";
                    container.style.padding = "0";

                },
                showCloseButton: false, // Disable the close button
                allowOutsideClick: false, // Prevent closing by clicking outside the modal
                allowEscapeKey: false,
            });
        }, 500);
        disableHighLightC3();
        // enableHighLightK();
        return
    }
    else if (kVal === 2) {
        setTimeout(function () {
            Swal.fire({
                icon: "info",
                title: "Insert Cluster value!",
                text: "Click on the highlighted cell (K) and enter the value.",
                customClass: {
                    container: "swal-container",
                    popup: "swal-popup",
                    title: "swal-title",
                    content: "swal-content",
                    confirmButton: "swal-button", // Add this line for the confirm button
                    cancelButton: "swal-button" // Add this line for the cancel button

                },
                target: myContainer,
                didOpen: () => {
                    const container = document.querySelector(".swal-container");
                    const containerWidth = myContainer.offsetWidth;
                    const containerHeight = myContainer.offsetHeight;

                    // Change font size based on container size
                    if (containerWidth >= 1000 && containerHeight >= 672) {
                        container.style.fontSize = "24px";
                    } else {
                        container.style.fontSize = "16px";
                    }

                    // Adjust dimensions and position of the Swal container
                    container.style.position = "absolute";
                    container.style.width = "100%";
                    container.style.height = "100%";
                    container.style.top = "0";
                    container.style.left = "0";
                    container.style.padding = "0";

                },
                showCloseButton: false, // Disable the close button
                allowOutsideClick: false, // Prevent closing by clicking outside the modal
                allowEscapeKey: false,
            });
        }, 500);
        disableHighLightC2();
        // enableHighLightK();
        return
    }
    else {
        return
    }
}





// let FirstCentroids = [];
let newCentroids = [];
let currentCluster = 1;


function HighLightRowsOfCluster() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            const cluster = row.cells[oldClusterkVal + 3];
            const Newcluster = row.cells[oldClusterkVal + 4];
            const x = row.cells[1];
            const y = row.cells[2];
            if (cluster && cluster.innerText.trim() === `${currentCluster}`) {
                // row.classList.add("highlighted-row");
                cluster.classList.add("highlighted-row");
                x.classList.add("highlighted-row");
                y.classList.add("highlighted-row");
                if (Newcluster) {
                    Newcluster.classList.remove("highlighted-row");

                }
            } else {
                // row.classList.remove("highlighted-row");
                cluster.classList.remove("highlighted-row");
                x.classList.remove("highlighted-row");
                y.classList.remove("highlighted-row");
                if (Newcluster) {
                    Newcluster.classList.remove("highlighted-row");

                }
            }
        });
}
function ResetHighLightRowsOfCluster() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            const cluster = row.cells[oldClusterkVal + 3];
            const x = row.cells[1];
            const y = row.cells[2];
            if (cluster && cluster.innerHTML.trim() === `<div onclick="editCell(this)">${currentCluster}</div>`) {
                // row.classList.remove("highlighted-row");
                // row.classList.remove("highlight");
                cluster.classList.remove("highlight");
                cluster.classList.remove("disabled");
                x.classList.remove("highlighted-row");
                y.classList.remove("highlighted-row");
                x.classList.remove("highlight");
                y.classList.remove("highlight");
            } else {
                // row.classList.remove("highlighted-row");
                // row.classList.remove("highlight");
                if (cluster) {
                    cluster.classList.remove("highlight");
                    cluster.classList.remove("highlighted-row");
                    cluster.classList.remove("disabled");

                    x.classList.remove("highlighted-row");
                    y.classList.remove("highlighted-row");
                    x.classList.remove("highlight");
                    y.classList.remove("highlight");
                }
            }
        });
}

let equationLines = [];
let calculatedLines = [];
let showCount = 0;

function findNewCentroids(data, centroids) {
    let show = document.getElementById("cenroidsContainerStore");
    const currentCentroidLine = document.createElement("p");

    show.innerHTML = "";
    // show.innerText = `New Centroids`;
    chnageTextClusterIntoNewClusterCounter++;

    const labels = data.map(point => {
        const distances = centroids.map(centroid => {
            return Math.sqrt(
                Math.pow(centroid[0] - point[0], 2) + Math.pow(centroid[1] - point[1], 2)
            );
        });
        return distances.indexOf(Math.min(...distances));
    });

    // Step 2: Update the centroids based on the assigned data points
    const newCentroids = centroids.map((centroid, i) => {
        const assignedPoints = data.filter((point, j) => labels[j] === i);
        if (assignedPoints.length === 0) {
            return centroid;
        }
        const sumX = assignedPoints.reduce((sum, point) => sum + point[0], 0);
        const sumY = assignedPoints.reduce((sum, point) => sum + point[1], 0);
        const newX = roundToTwoDecimalPlaces(sumX / assignedPoints.length);
        const newY = roundToTwoDecimalPlaces(sumY / assignedPoints.length);

        const equationLine = `C${i + 1}= ((${assignedPoints.map(point => point[0]).join(' + ')}) / ${assignedPoints.length}), ((${assignedPoints.map(point => point[1]).join(' + ')}) / ${assignedPoints.length})`;
        const calculatedLine = `C${i + 1} = (${newX}, ${newY})`;

        equationLines.push(equationLine);
        calculatedLines.push(calculatedLine);

        return [newX, newY];
    });

    showCount++;

    if (showCount === 1) {
        show.innerText = `New Centroids` + '\n' + equationLines[0];
        console.log("showcount", showCount);
    } else if (showCount === 2) {
        show.innerText = `New Centroids` + '\n' + calculatedLines[0] + '\n' + equationLines[1];
        console.log("showcount", showCount);

        // showCount = 0;
        // equationLines = [];
        // calculatedLines = [];
    }
    else if (showCount === 3) {
        if (kVal === (showCount - 1)) {
            // equationLines.push(" ");
            show.innerText = `New Centroids` + '\n' + calculatedLines[0] + '\n' + calculatedLines[1]
            showCount = 0;
            equationLines = [];
            calculatedLines = [];
            DisableNewCentroidButton()
            return;
        }

        show.innerText = `New Centroids` + '\n' + calculatedLines[0] + '\n' + calculatedLines[1] + '\n' + equationLines[2];
        console.log("showcount", showCount);


    }
    else if (showCount === 4) {
        if (kVal === (showCount - 1)) {
            // equationLines.push(" ");
            show.innerText = `New Centroids` + '\n' + calculatedLines[0] + '\n' + calculatedLines[1] + '\n' + calculatedLines[2];
            showCount = 0;
            equationLines = [];
            calculatedLines = [];
            DisableNewCentroidButton()
            return;
        }
        show.innerText = `New Centroids` + '\n' + calculatedLines[0] + '\n' + calculatedLines[1] + '\n' + calculatedLines[2] + '\n' + equationLines[3];
        console.log("showcount", showCount);

    }
    else if (showCount === 5) {
        if (kVal === (showCount - 1)) {
            equationLines.push(" ");

        }
        show.innerText = `New Centroids` + '\n' + calculatedLines[0] + '\n' + calculatedLines[1] + '\n' + calculatedLines[2] + '\n' + calculatedLines[3];
        console.log("showcount", showCount);

        if (kVal === (showCount - 1)) {
            showCount = 0;
            equationLines = [];
            calculatedLines = [];
            DisableNewCentroidButton()

            return;
        }
    }

    return newCentroids;
}




function findNewCentroidsValue(data, centroids) {

    const labels = data.map(point => {
        const distances = centroids.map(centroid => {
            return Math.sqrt(
                Math.pow(centroid[0] - point[0], 2) + Math.pow(centroid[1] - point[1], 2)
            );
        });
        return distances.indexOf(Math.min(...distances));
    });

    // Step 2: Update the centroids based on the assigned data points
    const newCentroids = centroids.map((centroid, i) => {
        const assignedPoints = data.filter((point, j) => labels[j] === i);
        if (assignedPoints.length === 0) {
            return centroid;
        }
        const sumX = assignedPoints.reduce((sum, point) => sum + point[0], 0);
        const sumY = assignedPoints.reduce((sum, point) => sum + point[1], 0);
        const newX = roundToTwoDecimalPlaces(sumX / assignedPoints.length);
        const newY = roundToTwoDecimalPlaces(sumY / assignedPoints.length);

        return [newX, newY];
    });
    return newCentroids;
}

function displayEquationLine() {
    let show = document.getElementById("cenroidsContainerStore");
    show.innerText += '\n' + equationLines[equationLines.length - 1];
}



function ResetfindNewCentroids() {
    let show = document.getElementById("cenroidsContainerNew");
    let shownew = document.getElementById("cenroidsContainerStore");

    // show.innerHTML = '';
    // shownew.innerHTML = '';

}

let alertCount = 1;
document.getElementById("new-centroids").addEventListener("click", function () {

    // beforeClusterCheck();
    showCentroids(centroids)
    chnageTextClusterIntoNewClusterCounter++;
    if (checkArraysEqual(clusterAll, clusterOld)) {
        enableHighLightClusterAll();
        enableHighLightNewClusterAll();
        Swal.fire({
            icon: "success",
            title: "Matched!!!!",
            html: 'The \'Clusters\' and \'New Cluster\' entries are matched.<br> Please proceed by clicking the <b style="color: #FF6600">NEXT</b> button.',
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
                confirmButton: "swal-button", // Add this line for the confirm button
                cancelButton: "swal-button" // Add this line for the cancel button

            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        // updateTableForNewCluster();
        DisableNewCentroidButton();
        // DisplayNextComputeButton();
        enableNextComputeButton();
        return;

    }
    if (currentCluster <= (kVal + 1)) {

        if (currentCluster <= kVal) {
            HighLightRowsOfCluster();
            setTimeout(function () {

                Swal.fire({
                    icon: "info",
                    html: 'Again click on the <b style="color: #FF6600">CENTROIDS</b> Button!',
                    // text: "New clusters value shows up in specific cells.",
                    customClass: {
                        container: "swal-container",
                        popup: "swal-popup",
                        title: "swal-title",
                        content: "swal-content",
                    },
                    target: myContainer,
                    didOpen: () => {
                        const container = document.querySelector(".swal-container");
                        const containerWidth = myContainer.offsetWidth;
                        const containerHeight = myContainer.offsetHeight;

                        // Change font size based on container size
                        if (containerWidth >= 1000 && containerHeight >= 672) {
                            container.style.fontSize = "24px";
                        } else {
                            container.style.fontSize = "16px";
                        }

                        // Adjust dimensions and position of the Swal container
                        container.style.position = "absolute";
                        container.style.width = "100%";
                        container.style.height = "100%";
                        container.style.top = "0";
                        container.style.left = "0";
                        container.style.padding = "0";
                    },
                });
                console.log("After 5 seconds");
            }, 500);
        }

        findNewCentroids(data, centroids);
    }
    currentCluster++;
    console.log(clusterAll);
    console.log('currentCluster', currentCluster);

    if (currentCluster > (kVal + 1)) {
        ResetHighLightRowsOfCluster();
        if (newClusterkVal === oldClusterkVal) {
            newClusterkVal--;
            oldClusterkVal++;
        }

        if (alertCount < 2) {
            let table1 = document.getElementById("clusterK");
            if (table1.innerText === 'CLUSTER') {
                // console.log('checkingggg')
                table1.innerText = 'OLD CLUSTER'
            }
            console.log(table1.innerHTML);
            Swal.fire({
                icon: "info",
                title: "Find Euclidean distance!",
                html: 'Click on <b style="color: #FF6600">D1</b> button.',
                customClass: {
                    container: "swal-container",
                    popup: "swal-popup",
                    title: "swal-title",
                    content: "swal-content",
                    confirmButton: "swal-button", // Add this line for the confirm button
                    cancelButton: "swal-button" // Add this line for the cancel button
                },
                target: myContainer,
                didOpen: () => {
                    const container = document.querySelector(".swal-container");
                    const containerWidth = myContainer.offsetWidth;
                    const containerHeight = myContainer.offsetHeight;

                    // Change font size based on container size
                    if (containerWidth >= 1000 && containerHeight >= 672) {
                        container.style.fontSize = "24px";
                    } else {
                        container.style.fontSize = "16px";
                    }

                    // Adjust dimensions and position of the Swal container
                    container.style.position = "absolute";
                    container.style.width = "100%";
                    container.style.height = "100%";
                    container.style.top = "0";
                    container.style.left = "0";
                    container.style.padding = "0";

                },
                showCloseButton: false, // Disable the close button
                allowOutsideClick: false, // Prevent closing by clicking outside the modal
                allowEscapeKey: false,
            });
            alertCount++;
        }




        newCentroids = findNewCentroidsValue(data, centroids);
        console.log(newCentroids);
        updateTableForNewCluster();
        kMeansClustering();
        currentCluster = 1;
        currentCellIndex = 1;

    }
});
document.getElementById("next-compute-to-analysis").addEventListener("click", function () {


    DisplayAnalysis();
    tabChangeIntoAnalysis();
    NoneCentroidAll();
    NoneClusterAll();
    NoneComputeSection();

    centroids = removeFirstElement(centroids)
    createTable(data, clusterAll)


    NoneDataSetAll();
    NoneTableSection();
    NoneGraphSection();
    DisplayAnalysis();
    document.getElementById("trainingSection").style.display = "none";


});


function tabChangeIntoAnalysis() {

    let NextClass = document.querySelectorAll(".tab-2-disInvert");
    let currentClass = document.querySelectorAll(".tab-1-invert");
    for (let i = 0; i < NextClass.length; i++) {
        NextClass[i].className = "tab-2-invert";
    }
    for (let i = 0; i < currentClass.length; i++) {
        currentClass[i].className = "tab-1-disInvert";
    }
    document.getElementById('tab-1').style.backgroundColor = "#444648";
    document.getElementById('anaimg').src = 'ANALYSIS1.png';
    document.getElementById('anaimg').style.cursor = 'pointer';
    document.getElementById('calcimg').src = 'calculator.png';
    document.getElementById('calcimg').style.cursor = 'not-allowed';
}

function checkArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}
function assignUserCentroids() {
    let centroidVal = []; // Define centroidVal array
    for (let index = 0; index < firstcentroidsIndex.length; index++) {
        centroidVal.push(data[Number(firstcentroidsIndex[index])]);
    }
    return centroidVal;
}

function resetComputeSectionForButton() {
    let table1 = document.getElementById("clusterK");
    if (table1.innerText === 'OLD CLUSTER') {
        // console.log('checkingggg')
        table1.innerText = 'CLUSTER'
    }
    console.log(table1.innerHTML);
    const FirstCentroids = assignUserCentroids();
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");
    let show = document.getElementById("cenroidsContainerStore");
    show.innerHTML = '';



    if (countIteration > kVal) {

        if (checkArraysEqual(clusterAll, clusterOld)) {
            disableHighLightClusterAll();
            disableHighLightNewClusterAll();
        }
    }
    countIteration = 0;
    showCount = 0;
    showCentroids(FirstCentroids);
    alertCount = 1;
    Array.from(dataRows).slice(1).forEach((row) => {
        for (let i = 3; i <= oldClusterkVal + 3; i++) {
            const targetCell = row.cells[i];
            if (targetCell) {
                targetCell.innerHTML = "";
            }
        }
    });

    Array.from(dataRows).slice(1).forEach((row, index) => {
        const cluster = row.cells[oldClusterkVal + 3];
        if (cluster) {
            cluster.innerHTML = "";
        }
    });

    ResetHighLightRowsOfCluster();

    if (newClusterkVal !== oldClusterkVal) {
        currentCluster = 1;
        currentCellIndex = 1;
        newClusterkVal++;
        oldClusterkVal--;

        // highlightNextCell();
        console.log("yes working");
        for (var i = 0; i < dataRows.length; i++) {
            var cells = dataRows[i].getElementsByTagName("td");
            var lastCellIndex = cells.length - 1;

            if (lastCellIndex >= 0) {
                cells[lastCellIndex].parentNode.removeChild(cells[lastCellIndex]);
            }
        }
    }

    currentCluster = 1;
    currentCellIndex = 1;

    enableComputeButton(0);
    disableComputeButton(1);
    disableComputeButton(2);
    disableComputeButton(3);
    highlightCentroid(-1);
    disableHighLightC1();
    disableHighLightC2();
    disableNextComputeButton();
    DisableNewCentroidButton();
    if (kVal === 3) {
        disableHighLightC3();
    }

    if (kVal === 4) {
        disableHighLightC3();
        disableHighLightC4();
    }

    // disableHighLightK();


    newCentroids = [];
    // centroids = [];
    clusterAll = [];
    clusterOld = [];
    centroids = [];
    centroids = FirstCentroids;
    // highlightNextCell();


    Swal.fire({
        icon: "info",
        title: "Find Euclidean distance!",
        html: 'Click on <b style="color: #FF6600">D1</b> button.',
        customClass: {
            container: "swal-container",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
            confirmButton: "swal-button", // Add this line for the confirm button
            cancelButton: "swal-button" // Add this line for the cancel button
        },
        target: myContainer,
        didOpen: () => {
            const container = document.querySelector(".swal-container");
            const containerWidth = myContainer.offsetWidth;
            const containerHeight = myContainer.offsetHeight;

            // Change font size based on container size
            if (containerWidth >= 1000 && containerHeight >= 672) {
                container.style.fontSize = "24px";
            } else {
                container.style.fontSize = "16px";
            }

            // Adjust dimensions and position of the Swal container
            container.style.position = "absolute";
            container.style.width = "100%";
            container.style.height = "100%";
            container.style.top = "0";
            container.style.left = "0";
            container.style.padding = "0";

        },
        showCloseButton: false, // Disable the close button
        allowOutsideClick: false, // Prevent closing by clicking outside the modal
        allowEscapeKey: false,
    });
}




function resetComputeSection() {
    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows).slice(1).forEach((row) => {
        for (let i = 3; i <= (oldClusterkVal + 3); i++) {
            const targetCell = row.cells[i];
            if (targetCell) {
                targetCell.innerHTML = " ";
            }
        }
    });

    enableComputeButton(0);
    disableComputeButton(1);
    disableComputeButton(2);
    disableComputeButton(3);
    highlightCentroid(-1);
    disableHighLightC1();
    disableHighLightC2();
    if (kVal == 3) {
        disableHighLightC3();

    }
    if (kVal == 4) {
        disableHighLightC3();
        disableHighLightC4();

    }
    // disableHighLightK();

    currentCluster = 1;
    currentCellIndex = 1;

}

function copyArray(source, target) {
    for (let i = 0; i < source.length; i++) {
        target[i] = source[i];
    }
}




function beforeClusterCheck() {
    console.log("beforeClusterCheck");

    if (checkArraysEqual(clusterAll, clusterOld)) {
        console.log("beforeClusterCheck inner");
        Swal.fire({
            icon: "success",
            title: "Matched!!!",
            html: 'The \'Clusters\' and \'New Cluster\' entries are matched.<br> Please proceed by clicking the <b style="color: #FF6600">NEXT</b> button.',
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
                confirmButton: "swal-button", // Add this line for the confirm button
                cancelButton: "swal-button" // Add this line for the cancel button

            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });

        return
    }
    else {
        // alert("Computing New centroids!");
        Swal.fire({
            icon: "error",
            title: "Computing New centroids!",
            text: "cluster and new cluster are not matched.",
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
                confirmButton: "swal-button", // Add this line for the confirm button
                cancelButton: "swal-button" // Add this line for the cancel button

            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
    }

}


function kMeansClustering() {
    highlightNextCell();
    if (!checkArraysEqual(clusterAll, clusterOld)) {
        ResetfindNewCentroids();
        resetComputeSection();
        updateTableForNewCluster();
        copyArray(clusterAll, clusterOld);
        clusterAll = [];
        if (!checkArraysEqual(newCentroids, centroids)) {
            showCentroids(centroids)
        }
        copyArray(newCentroids, centroids);

        console.log(centroids);
        console.log(newCentroids);
        console.log(clusterAll);

    }
    else {
        enableHighLightClusterAll();
        Swal.fire({
            icon: "success",
            title: "Matched!!!",
            html: 'The \'Clusters\' and \'New Cluster\' entries are matched.<br> Please proceed by clicking the <b style="color: #FF6600">NEXT</b> button.',
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
                confirmButton: "swal-button", // Add this line for the confirm button
                cancelButton: "swal-button" // Add this line for the cancel button

            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        Swal.fire({
            icon: "info",
            html: 'Click on <b style="color: #FF6600">NEXT/b> button!',
            customClass: {
                container: "swal-container",
                popup: "swal-popup",
                title: "swal-title",
                content: "swal-content",
                confirmButton: "swal-button", // Add this line for the confirm button
                cancelButton: "swal-button" // Add this line for the cancel button

            },
            target: myContainer,
            didOpen: () => {
                const container = document.querySelector(".swal-container");
                const containerWidth = myContainer.offsetWidth;
                const containerHeight = myContainer.offsetHeight;

                // Change font size based on container size
                if (containerWidth >= 1000 && containerHeight >= 672) {
                    container.style.fontSize = "24px";
                } else {
                    container.style.fontSize = "16px";
                }

                // Adjust dimensions and position of the Swal container
                container.style.position = "absolute";
                container.style.width = "100%";
                container.style.height = "100%";
                container.style.top = "0";
                container.style.left = "0";
                container.style.padding = "0";

            },
            showCloseButton: false, // Disable the close button
            allowOutsideClick: false, // Prevent closing by clicking outside the modal
            allowEscapeKey: false,
        });
        // updateTableForNewCluster();
        DisableNewCentroidButton();
        // DisplayNextComputeButton();
        enableNextComputeButton();

    }
}



let newClusterkVal;
let oldClusterkVal;


function updateTableForNewCluster() {

    const dataTableCompute = document.getElementById("data-table-compute");
    const dataRows = dataTableCompute.querySelectorAll("tbody tr");

    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {
            // row.cells[kVal + 4].innerText = clusterAll[index];

            const cluster = row.cells[newClusterkVal + 4];

            if (cluster) {
                cluster.innerHTML = " ";
                cluster.innerHTML = clusterAll[index];;
            } else {
                const newCell = row.insertCell();
                newCell.innerHTML = clusterAll[index];;
            }
        });
}

function TableCluster() {
    const dataTableCompute = document.getElementById("data-table-compute");

    const dataRows = dataTableCompute.querySelectorAll("tbody tr");
    Array.from(dataRows)
        .slice(1)
        .forEach((row, index) => {



            const cluster = row.cells[oldClusterkVal + 3];

            if (cluster) {
                cluster.classList.add('disable-cursor');
                cluster.innerHTML = ' ';
                cluster.innerHTML = '<div onclick="editCell(this)">K</div>';
            } else {
                const newCell = row.insertCell();
                newCell.innerHTML = '<div onclick="editCell(this)">K</div>';
                newCell.classList.add('disable-cursor');
            }
        });
}


//analysis

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}





function drawChartAnalysis() {
    var numPoints = 10; // Number of data points
    var numClusters = kVal; // Number of clusters
    var minValue = 0; // Minimum value for random data
    var maxValue = 100; // Maximum value for random data
    var containerWidth = 400; // Width of the graph container
    var containerHeight = 400; // Height of the graph container



    // Generate random colors for each cluster
    var clusterColors = new Array(numClusters).fill().map(() => generateRandomColor());

    // Find the maximum range to create a square graph
    var maxRange = Math.max(maxValue - minValue, maxValue - minValue);

    // Create data table
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('number', 'X');
    dataTable.addColumn('number', 'Y');
    dataTable.addColumn({ type: 'string', role: 'style' });

    // Add data points and cluster values to the data table
    for (var i = 0; i < numPoints; i++) {
        var x = data[i + 1][0];
        var y = data[i + 1][1];
        var clusterIndex = clusterAll[i];
        var color = clusterColors[clusterIndex - 1];
        dataTable.addRow([x, y, 'point { size: 5; fill-color: ' + color + ' }']);
    }

    // Set chart options

    var options = {
        // title: 'Data Set',
        legend: { position: "none" },
        hAxis: {
            title: "X-axis",
            minValue: 0,
        },
        vAxis: {
            title: "Y-axis",
            minValue: 0,
        },
        chartArea: { width: "80%", height: "80%" }, // Added to adjust the chart area size
    };

    // Create scatter plot chart
    var chart = new google.visualization.ScatterChart(document.getElementById('graph'));
    chart.draw(dataTable, options);

    // Create the legend
    var legend = document.getElementById('legend');
    for (var i = 0; i < numClusters; i++) {
        console.log(i)
        var legendItem = document.createElement('div');
        legendItem.classList.add('legend-item');

        var legendColor = document.createElement('div');
        legendColor.classList.add('legend-color');
        legendColor.style.backgroundColor = clusterColors[i];
        legendItem.appendChild(legendColor);

        var legendLabel = document.createElement('div');
        legendLabel.classList.add('legend-label');
        legendLabel.textContent = 'Cluster ' + (i + 1);
        legendItem.appendChild(legendLabel);

        legend.appendChild(legendItem);

    }
}


function analysisContainer() {
    google.charts.load('current', { packages: ['corechart', 'table'] });
    google.charts.setOnLoadCallback(drawChartAnalysis);

}

function printPage() {
    window.print();
}


function createTable(data, clusters) {
    var tableHTML = '';
    for (var i = 0; i < (data.length - 1); i++) {
        var row = data[i + 1];
        var cluster = clusters[i];
        tableHTML += '<tr>';
        tableHTML += '<td>' + (i + 1) + '</td>';
        tableHTML += '<td>' + row[0] + '</td>';
        tableHTML += '<td>' + row[1] + '</td>';
        tableHTML += '<td>' + cluster + '</td>';
        tableHTML += '</tr>';
    }

    var tableBody = document.querySelector('#data-table-analysis tbody');
    tableBody.innerHTML = tableHTML;
}
function removeFirstElement(arr) {
    return [...arr.slice(1)];
}


function disablePlotAnalysis() {
    let plot = document.getElementById("plot-analysis");
    plot.disabled = true;
}
function enablePlotAnalysis() {
    let plot = document.getElementById("plot-analysis");
    plot.disabled = false;
}
disablePrintButton();
function disablePrintButton() {
    let print = document.getElementById("print");
    print.disabled = true;
}
function enablePrintButton() {
    let print = document.getElementById("print");
    print.disabled = false;
}

document.getElementById("plot-analysis").addEventListener("click", function () {

    analysisContainer();
    enablePrintButton();
    disablePlotAnalysis();


    Swal.fire({
        icon: "success",
        title: "Cluster formed!",
        text: `As per the data, ${kVal} clusters have been formed.`,
        customClass: {
            container: "swal-container",
            popup: "swal-popup",
            title: "swal-title",
            content: "swal-content",
            confirmButton: "swal-button", // Add this line for the confirm button
            cancelButton: "swal-button" // Add this line for the cancel button
        },
        target: myContainer,
        didOpen: () => {
            const container = document.querySelector(".swal-container");
            const containerWidth = myContainer.offsetWidth;
            const containerHeight = myContainer.offsetHeight;

            // Change font size based on container size
            if (containerWidth >= 1000 && containerHeight >= 672) {
                container.style.fontSize = "24px";
            } else {
                container.style.fontSize = "16px";
            }

            // Adjust dimensions and position of the Swal container
            container.style.position = "absolute";
            container.style.width = "100%";
            container.style.height = "100%";
            container.style.top = "0";
            container.style.left = "0";
            container.style.padding = "0";

        },
        showCloseButton: false, // Disable the close button
        allowOutsideClick: false, // Prevent closing by clicking outside the modal
        allowEscapeKey: false,
    });

});


// window.onbeforeunload = function () {
//     // Redirect to the index.html file
//     window.location.href = 'index.html';

// };

if (performance.navigation.type === 1) {
    // Page was reloaded, redirect to index.html
    window.location.href = 'index.html';
}




