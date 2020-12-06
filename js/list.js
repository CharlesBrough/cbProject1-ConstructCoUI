const placeEmployee = (id, employeeName, roleId, roleName) => {
  //DOM manipulate to insert to table i'm guessing
};

const getEmployees = () => {
  const xhr = new XMLHttpRequest();

  //5 readyStates: 4 is completely done/loaded (0-4)
  xhr.onreadystatechange = () => {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(xhr.responseText);

      for(i=0; i < data.length; i++) {
        placeEmployee(data[i].id, data[i].employeeName, data[i].roleId, data[i].roleName);
        console.log(data[i]);
      }
    }
  };

  //this will cause a CORS error! not that it's a legit url anyway
  xhr.open('GET', 'http://localhost:8080/MusicianServer/musician');
  // xhr.open('GET', 'http://localhost:8080/constructionServer/employee');

  xhr.send();
};

getEmployees();
