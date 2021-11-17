import axios from 'axios';

// helper function that parse the course data from API
async function OrcaParse() {
    let clink = "https://rcos-orca.herokuapp.com/202109/courses?include_sections=true&include_periods=false&limit=50&offset="; //Base ORCA API link
    let offset = 0;
    let allclasses = [];
    let go = true;
    while(go){//grab courses 50 at a time
        const page = await getpage(clink+offset.toString());
        offset+= 50;
        allclasses = allclasses.concat(page.slice());
        if(page.length !== 50) go = false; 
    }
    return allclasses; //return all courses
}

async function getpage(link){ //return either data or an error
    try {
        const response = await axios.get(link);
        return response.data;
    } catch(error){
        console.error(error);
    }
}

export default OrcaParse;