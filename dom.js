document.getElementById('add-border').addEventListener('click', function() {
    const container = document.getElementById('container');
    container.style.border = '3px solid orange'
});

document.getElementById('add-background').addEventListener('click', function() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'red';
        friend.style.color = 'white'
    }
})

document.getElementById('add-friend').addEventListener('click', function() {
    const container = document.getElementById('container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Se ki jane Ovimane</p>
    `;
    container.appendChild(friendDiv);
})