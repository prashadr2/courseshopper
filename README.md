## Title: Added courseCard, courseList and search page components

Contributer: Jiarui Ruan

Date: 10/5/2021

Sprint: 3

### Summary: 

Current Design Diagram:
https://drive.google.com/file/d/1aB1AuPYsFwaA9WGU9vYv_UG7W8bx1mh5/view?usp=sharing
![image](https://user-images.githubusercontent.com/57366029/136102187-b7b31312-2f6b-44ac-a159-72a6cbfd872c.png)

Url: http://localhost:3000/searchresult

## Commit Summary

Title: Redid homepage

Contributer: Alexia Leong

Date: 10/4

Sprint: 3

Summary:
* Redid homepage:

![image](https://user-images.githubusercontent.com/33489293/135940267-015b62fe-ab8c-4267-86bd-8612bb66ea9f.png)

* Added logo images to the repo
* Got rid of the list of classes that are printed on the homepage

=======
Structure:
```
SearchPage
       CourseList 
            CourseCard (Reusable Component)
                Rating (Need to be implemented)
                TagList (low priority for now / Reusable Component)  
            CourseCard 
                Rating
                TagList
           .....
```


Screenshot: (may change sytling later)
![image](https://user-images.githubusercontent.com/57366029/136101742-006e6635-667d-4cc7-ae9b-ad3b79ede04e.png)


### Next Step in current branch
1. add rating in the courseCard
2. improve the styling of courseCard (border, color, font, etc.)
3. (IMPORTANT) store course, rating in the backend/react store (redux) and get the course info from backend -> connect frontend with backend
4. get the course description
