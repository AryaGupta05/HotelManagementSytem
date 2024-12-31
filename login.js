// Room data initialization
let rooms = [
    { number: 101, type: "Single", isBooked: false },
    { number: 102, type: "Double", isBooked: false },
    { number: 103, type: "Suite", isBooked: false },
    { number: 104, type: "Single", isBooked: false },
    { number: 105, type: "Double", isBooked: false }
];

// Show the available rooms
function viewRooms() {
    const roomListContainer = document.getElementById("roomListContainer");
    roomListContainer.innerHTML = ""; // Clear previous list

    rooms.forEach(room => {
        const listItem = document.createElement("li");
        listItem.textContent = `Room ${room.number} (${room.type}) - ${room.isBooked ? 'Booked' : 'Available'}`;
        roomListContainer.appendChild(listItem);
    });

    document.getElementById("roomList").classList.remove("hidden");
    hideForm('bookRoomForm');
    hideForm('releaseRoomForm');
    hideForm('exitMessage');
}

// Show the book room form
function showBookRoomForm() {
    hideForm('roomList');
    hideForm('releaseRoomForm');
    hideForm('exitMessage');
    document.getElementById("bookRoomForm").classList.remove("hidden");
}

// Show the release room form
function showReleaseRoomForm() {
    hideForm('roomList');
    hideForm('bookRoomForm');
    hideForm('exitMessage');
    document.getElementById("releaseRoomForm").classList.remove("hidden");
}

// Hide any form or message
function hideForm(formId) {
    document.getElementById(formId).classList.add("hidden");
}

// Book a room
function bookRoom() {
    const roomNumber = parseInt(document.getElementById("bookRoomNumber").value);
    const room = rooms.find(room => room.number === roomNumber);

    if (room && !room.isBooked) {
        room.isBooked = true;
        alert(`Room ${roomNumber} has been booked.`);
    } else if (room && room.isBooked) {
        alert(`Room ${roomNumber} is already booked.`);
    } else {
        alert("Room not found.");
    }

    hideForm('bookRoomForm');
    viewRooms();  // Refresh the room list
}

// Release a room
function releaseRoom() {
    const roomNumber = parseInt(document.getElementById("releaseRoomNumber").value);
    const room = rooms.find(room => room.number === roomNumber);

    if (room && room.isBooked) {
        room.isBooked = false;
        alert(`Room ${roomNumber} has been released.`);
    } else if (room && !room.isBooked) {
        alert(`Room ${roomNumber} is not booked.`);
    } else {
        alert("Room not found.");
    }

    hideForm('releaseRoomForm');
    viewRooms();  // Refresh the room list
}

// Exit the system
function exitSystem() {
    hideForm('roomList');
    hideForm('bookRoomForm');
    hideForm('releaseRoomForm');
    document.getElementById("exitMessage").classList.remove("hidden");
}
