if (!localStorage.getItem('visits')) {
    localStorage.setItem('visits', 1)
} else {
    let visits = localStorage.getItem('visits');
    localStorage.setItem('visits', parseInt(visits)+1 )
}

document.querySelector('.visits').innerHTML = `You have visited this site ${localStorage.getItem('visits')} ${parseInt(localStorage.getItem('visits'))>1? "times":"time"}`