const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      text: "i am baby meggins twee health goth +1 bicycle rights tumeric chartreuse before they sold",
    },
    {
      id: 2,
      name: "John Doe",
      job: "Software Engineer",
      text: "Great service and excellent quality. Highly recommended!",
    },
    {
      id: 3,
      name: "Alice Johnson",
      job: "Graphic Designer",
      text: "Amazing experience! The team was very professional and efficient.",
    },
    {
      id: 4,
      name: "Michael Brown",
      job: "Data Analyst",
      text: "The product exceeded my expectations. Will definitely buy again!",
    },
    {
      id: 5,
      name: "Emily Davis",
      job: "Marketing Manager",
      text: "Superb customer service and prompt delivery. Thank you!",
    },
    {
      id: 6,
      name: "Chris Wilson",
      job: "UI/UX Designer",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aut expedita reprehenderit magni eligendi commodi? Laboriosam cum veritatis a ad sed eveniet tempora ab, amet ullam repudiandae nam ratione quasi atque corrupti consequatur quod delectus inventore. Expedita tempore deserunt ea.",
    },
    {
      id: 7,
      name: "Jennifer Martinez",
      job: "Project Manager",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores quae ipsam perspiciatis, accusamus aliquid praesentium rerum placeat obcaecati enim quia veniam dolor, perferendis repellendus architecto? Dolore, pariatur distinctio itaque laborum consequuntur quos voluptates aperiam illum eos, maxime ipsa praesentium assumenda? Cumque odio nemo laudantium consectetur nobis quos neque optio id",
    },
    {
      id: 8,
      name: "David Taylor",
      job: "Content Writer",
      text: "Excellent product description and clear communication.",
    },
    {
      id: 9,
      name: "Laura Anderson",
      job: "Customer Support Specialist",
      text: "Outstanding support team. Resolved my issue in no time!",
    },
]

const img = document.getElementById("person");

const author = document.getElementById("author");

const job = document.getElementById("job");

const info = document.getElementById("info");

const prebtn = document.querySelector(".prev-btn")
const nextbtn = document.querySelector(".next-btn")
const randombtn = document.querySelector(".random-btn")

let currentItem = 3;

window.addEventListener('DOMContentLoaded', function(){
 showPerson(currentItem)
})

function showPerson(person){
    const item = reviews[person]
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextbtn.addEventListener('click', function(){
    currentItem++;
    showPerson(currentItem)
})

prebtn.addEventListener('click', function(){
    currentItem--;
    showPerson(currentItem)
})
