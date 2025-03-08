const COHORT_CODE = "2412-FTB-MT-WEB-PT";


function getObjectscallb (){

    fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT_CODE}/events`).then((response) => response.json()).then((data) => {


        console.log(data);
    })
  
   
}
    getObjectscallb();

    //Got lists of all the party events data using callback - not async await 


    function addObjectscallb (eventdata){

        fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT_CODE}/events`,{
            method: "POST" ,
            headers: {
                    'Content-Type': 'application/json' ,
            body: JSON.stringify(eventdata) 
        }.then((response) => response.json()).then((data) => {
    
    
            console.log(data);
        }), }
    )
};

// addObjectscallb(eventdata ,
//     {
//         "name": "Fullstack Gala",
//         "description": "A night of celebration and networking",
//         "date": "2021-09-15T00:00:00.000Z",
//         "location": "Main Ballroom"
//       }
// );
 console.log(addObjectscallb);

 //Created a fetch to enable new Post into the API


 const url = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT_CODE}/events`;
 const options = {
    method: 'DELETE'
  };

  fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
  console.log('Data deleted successfully:', data);
})
.catch(error => {
  console.error('Error deleting data:', error);
});