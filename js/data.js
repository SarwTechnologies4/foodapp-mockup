/**
 * Fake data for Food App mockup — not connected to any backend.
 */

window.MOCK_ITEMS = [
  {
    id: "1",
    sn: 1,
    name: "Chicken Momo",
    group: "Appetizers",
    branch: "Kathmandu",
    price: 250,
    active: true,
  },
  {
    id: "2",
    sn: 2,
    name: "Veg Chowmein",
    group: "Noodles",
    branch: "Pokhara",
    price: 180,
    active: true,
  },
  {
    id: "3",
    sn: 3,
    name: "Dal Bhat Set",
    group: "Main Course",
    branch: "Kathmandu",
    price: 350,
    active: true,
  },
  {
    id: "4",
    sn: 4,
    name: "Thukpa",
    group: "Soup",
    branch: "Lalitpur",
    price: 220,
    active: false,
  },
  {
    id: "5",
    sn: 5,
    name: "Sel Roti",
    group: "Snacks",
    branch: "Bhaktapur",
    price: 80,
    active: true,
  },
  {
    id: "6",
    sn: 6,
    name: "Buff Sekuwa",
    group: "Grill",
    branch: "Kathmandu",
    price: 420,
    active: true,
  },
  {
    id: "7",
    sn: 7,
    name: "Masala Tea",
    group: "Beverages",
    branch: "Pokhara",
    price: 60,
    active: true,
  },
  {
    id: "8",
    sn: 8,
    name: "Yomari",
    group: "Desserts",
    branch: "Bhaktapur",
    price: 120,
    active: false,
  },
];

/** Service categories with star-rating questions (admin-managed). */
window.MOCK_SERVICE_CATEGORIES = [
  {
    id: "svc-dining",
    name: "Dining / Restaurant",
    questions: [
      { id: "q-d1", text: "How would you rate the overall food quality?", enabled: true },
      { id: "q-d2", text: "How satisfied were you with the service?", enabled: true },
      { id: "q-d3", text: "How would you rate the ambience?", enabled: true },
      { id: "q-d4", text: "How would you rate the value for money?", enabled: false },
    ],
  },
  {
    id: "svc-delivery",
    name: "Wellness",
    questions: [
      { id: "q-t1", text: "How would you rate the delivery / pickup experience?", enabled: true },
      { id: "q-t2", text: "Was the order accurate and complete?", enabled: true },
      { id: "q-t3", text: "How would you rate the packaging?", enabled: true },
    ],
  },
  {
    id: "svc-events",
    name: "Events / Banquet",
    questions: [
      { id: "q-e1", text: "How would you rate the event arrangements?", enabled: true },
      { id: "q-e2", text: "How satisfied were you with the staff coordination?", enabled: true },
      { id: "q-e3", text: "How likely are you to book with us again?", enabled: true },
    ],
  },
  {
    id: "svc-rooms",
    name: "Rooms / Stay",
    questions: [
      { id: "q-r1", text: "How would you rate the cleanliness of the room?", enabled: true },
      { id: "q-r2", text: "How would you rate the comfort of your stay?", enabled: true },
      { id: "q-r3", text: "How satisfied were you with check-in / check-out?", enabled: false },
    ],
  },
];

window.MOCK_FEEDBACK = [
  {
    id: "f1",
    sn: 1,
    name: "Anisha Sharma",
    phone: "+977 9841234567",
    email: "anisha.sharma@email.com",
    stars: 5,
    services: ["Dining / Restaurant", "Wellness"],
    remarks: "Everything was perfect!",
    submittedAt: "2026-07-20 14:32",
    answers: [
      {
        service: "Dining / Restaurant",
        question: "How would you rate the overall food quality?",
        stars: 5,
      },
      {
        service: "Dining / Restaurant",
        question: "How satisfied were you with the service?",
        stars: 5,
      },
      {
        service: "Dining / Restaurant",
        question: "How would you rate the ambience?",
        stars: 4,
      },
      {
        service: "Wellness",
        question: "How would you rate the delivery / pickup experience?",
        stars: 5,
      },
      {
        service: "Wellness",
        question: "Was the order accurate and complete?",
        stars: 5,
      },
      {
        service: "Wellness",
        question: "How would you rate the packaging?",
        stars: 4,
      },
    ],
  },
  {
    id: "f2",
    sn: 2,
    name: "Rajesh Thapa",
    phone: "+977 9801122334",
    email: "rajesh.thapa@email.com",
    stars: 4,
    services: ["Events / Banquet"],
    remarks: "Staff coordination was excellent.",
    submittedAt: "2026-07-19 11:05",
    answers: [
      {
        service: "Events / Banquet",
        question: "How would you rate the event arrangements?",
        stars: 4,
      },
      {
        service: "Events / Banquet",
        question: "How satisfied were you with the staff coordination?",
        stars: 5,
      },
      {
        service: "Events / Banquet",
        question: "How likely are you to book with us again?",
        stars: 4,
      },
    ],
  },
  {
    id: "f3",
    sn: 3,
    name: "Sita Gurung",
    phone: "+977 9817654321",
    email: "sita.gurung@email.com",
    stars: 3,
    services: ["Rooms / Stay"],
    remarks: "Room was fine but check-out took longer than expected.",
    submittedAt: "2026-07-18 18:47",
    answers: [
      {
        service: "Rooms / Stay",
        question: "How would you rate the cleanliness of the room?",
        stars: 3,
      },
      {
        service: "Rooms / Stay",
        question: "How would you rate the comfort of your stay?",
        stars: 3,
      },
    ],
  },
  {
    id: "f4",
    sn: 4,
    name: "Bikash Rai",
    phone: "+977 9860011223",
    email: "bikash.rai@email.com",
    stars: 5,
    services: ["Dining / Restaurant"],
    remarks: "Will visit again soon.",
    submittedAt: "2026-07-17 09:20",
    answers: [
      {
        service: "Dining / Restaurant",
        question: "How would you rate the overall food quality?",
        stars: 5,
      },
      {
        service: "Dining / Restaurant",
        question: "How satisfied were you with the service?",
        stars: 5,
      },
      {
        service: "Dining / Restaurant",
        question: "How would you rate the ambience?",
        stars: 5,
      },
    ],
  },
  {
    id: "f5",
    sn: 5,
    name: "Priya Maharjan",
    phone: "+977 9845566778",
    email: "priya.m@email.com",
    stars: 2,
    services: ["Wellness"],
    remarks: "Food was cold on arrival.",
    submittedAt: "2026-07-16 20:15",
    answers: [
      {
        service: "Wellness",
        question: "How would you rate the delivery / pickup experience?",
        stars: 2,
      },
      {
        service: "Wellness",
        question: "Was the order accurate and complete?",
        stars: 3,
      },
      {
        service: "Wellness",
        question: "How would you rate the packaging?",
        stars: 2,
      },
    ],
  },
  {
    id: "f6",
    sn: 6,
    name: "Kiran Adhikari",
    phone: "+977 9703344556",
    email: "kiran.adhikari@email.com",
    stars: 4,
    services: ["Dining / Restaurant", "Rooms / Stay"],
    remarks: "Great food and comfortable stay.",
    submittedAt: "2026-07-15 13:40",
    answers: [
      {
        service: "Dining / Restaurant",
        question: "How would you rate the overall food quality?",
        stars: 4,
      },
      {
        service: "Dining / Restaurant",
        question: "How satisfied were you with the service?",
        stars: 5,
      },
      {
        service: "Dining / Restaurant",
        question: "How would you rate the ambience?",
        stars: 4,
      },
      {
        service: "Rooms / Stay",
        question: "How would you rate the cleanliness of the room?",
        stars: 4,
      },
      {
        service: "Rooms / Stay",
        question: "How would you rate the comfort of your stay?",
        stars: 5,
      },
    ],
  },
  {
    id: "f7",
    sn: 7,
    name: "Manisha KC",
    phone: "+977 9856677889",
    email: "manisha.kc@email.com",
    stars: 5,
    services: ["Events / Banquet", "Dining / Restaurant"],
    remarks: "Loved the banquet menu!",
    submittedAt: "2026-07-14 16:55",
    answers: [
      {
        service: "Events / Banquet",
        question: "How would you rate the event arrangements?",
        stars: 5,
      },
      {
        service: "Events / Banquet",
        question: "How satisfied were you with the staff coordination?",
        stars: 5,
      },
      {
        service: "Events / Banquet",
        question: "How likely are you to book with us again?",
        stars: 5,
      },
      {
        service: "Dining / Restaurant",
        question: "How would you rate the overall food quality?",
        stars: 5,
      },
      {
        service: "Dining / Restaurant",
        question: "How satisfied were you with the service?",
        stars: 4,
      },
      {
        service: "Dining / Restaurant",
        question: "How would you rate the ambience?",
        stars: 5,
      },
    ],
  },
  {
    id: "f8",
    sn: 8,
    name: "Deepak Shrestha",
    phone: "+977 9822233445",
    email: "deepak.s@email.com",
    stars: 1,
    services: ["Wellness"],
    remarks: "Wrong order received.",
    submittedAt: "2026-07-13 12:10",
    answers: [
      {
        service: "Wellness",
        question: "How would you rate the delivery / pickup experience?",
        stars: 1,
      },
      {
        service: "Wellness",
        question: "Was the order accurate and complete?",
        stars: 1,
      },
      {
        service: "Wellness",
        question: "How would you rate the packaging?",
        stars: 2,
      },
    ],
  },
];
