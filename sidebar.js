// Mock Data: यह डेटा असल में backend से आता है
const studentData = {
  10001: {
    name: "Jay Shikha Kushwaha",
    result: "Pass",
    marks: 20,
    maximum_marks: 40,
    Test: "Ms Word",
  },
  10002: {
    name: "Princi Kushwaha",
    result: "Pass",
    marks: 21,
    maximum_marks: 40,
    Test: "Ms Word",
  },
  10003: {
    name: "Shivangi Sahu",
    result: "Pass",
    marks: 30,
    maximum_marks: 40,
    Test: "Ms Word",
  },
  10004: {
    name: "Fatima Khan",
    result: "Fail",
    marks: 19,
    maximum_marks: 45,
    Test: "Html Css ",
  },
  10005: {
    name: "Saurbh Yadav",
    result: "Pass",
    marks: 22,
    maximum_marks: 40,
    Test: "Ms Word",
  },
  10006: {
    name: "sulekha Yadav",
    result: "Pass",
    marks: 28,
    maximum_marks: 45,
    Test: "Html Css ",
  },
  10007: {
    name: "Jyoti Kushwaha",
    result: "Pass",
    marks: 31,
    maximum_marks: 40,
    Test: "Ms Word",
  },
  10008: {
    name: "Prerna Kushwaha",
    result: "Pass",
    marks: 35,
    maximum_marks: 45,
    Test: "Html Css ",
  },
  10009: {
    name: "Raj Kumari Verma",
    result: "Pass",
    marks: 29,
    maximum_marks: 40,
    Test: "Ms Word",
  },
  100010: {
    name: "Tanish Verma",
    result: "Pass",
    marks: 32,
    maximum_marks: 40,
    Test: "Ms Word",
  },

  67890: { name: "सीता", result: "Fail", marks: 40 },
  666666: {
    name: "Ramesh",
    result: "Pass",
    marks: 90,
    Father_Name: 50,
  },
  11121: { name: "गणेश", result: "Pass", marks: 92 },
};

function checkResult() {
  // Input से रोल नंबर प्राप्त करें
  const rollNumber = document.getElementById("rollNumber").value;

  // रोल नंबर को चेक करें और result दिखाएं
  const result = studentData[rollNumber];

  if (result) {
    document.getElementById("resultDisplay").innerHTML = `
          <p>Full_Name: ${result.name}</p>
          <p>Result: ${result.result}</p>
          <p>Marks: ${result.marks}</p>
          <p>Maximum_Marks: ${result.maximum_marks}</p>
          <p>Test: ${result.Test} </p>
      `;
  } else {
    document.getElementById(
      "resultDisplay"
    ).innerHTML = `<p>कृपया सही रोल नंबर दर्ज करें।</p>`;
  }
}

document.getElementById("openBtn").addEventListener("click", function () {
  document.getElementById("sidebar").style.width = "250px";
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("sidebar").style.width = "0";
});

// Sidebar close when clicked outside
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("openBtn");

  if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
    sidebar.style.width = "0";
  }
});

//input box ///

let availakey = [
  { keyword: "html", url: "https://www.w3schools.com/html/" },
  { keyword: "css", url: "https://www.w3schools.com/css/" },
  { keyword: "java", url: "https://www.w3schools.com/java/" },
  { keyword: "java Script", url: "https://www.w3schools.com/js/" },
  { keyword: "python", url: "https://www.w3schools.com/python/" },
  { keyword: "hcvxv", url: "sidebar.html" }, // Placeholder link
  { keyword: "Result Cherk", url: "student Result.html" }, // Placeholder link
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availakey.filter((item) => {
      return item.keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);
  if (!result.length) {
    resultsBox.innerHTML = "";
  }
};

function display(result) {
  const content = result.map((item) => {
    return (
      "<li onclick=\"redirectToPage('" +
      item.url +
      "')\">" +
      item.keyword +
      "</li>"
    );
  });
  resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

// यह फ़ंक्शन यूज़र को संबंधित पेज पर रीडायरेक्ट करेगा
function redirectToPage(url) {
  window.location.href = url;
}

//// input box
