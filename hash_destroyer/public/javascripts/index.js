// Buttons
const otherButton = document.getElementById("other");
const aboutButton = document.getElementById("about");

// Contents
const mainContent = document.getElementById("container-main-screen");
const otherContent = document.getElementById("container-other-screen");
const aboutContent = document.getElementById("container-about-screen");

const mainBox = new WinBox({
    index:10,
    id: "main-window",
    title: "Docker Swarm",
    icon: "images/whale.png",
    border: "0.6em",
    x: "center",
    y: "70",
    width: "70%",
    height: "80%",
    /* For desktop computer :
    height: "85%", */
    mount: mainContent,
    onfocus: function () {
        this.setBackground('#0E6B0E')
    },
    onblur: function () {
        this.setBackground('#555555')
    },
});

mainBox.removeControl("wb-close").removeControl("wb-full");

otherButton.addEventListener('click', () => {

    const otherBox = new WinBox({
        index:15,
        id: "other-window",
        title: "Other",
        icon: "images/whale.png",
        border: "0.2em",
        width: "350px",
        height: "300px",
        x: "60",
        y: "215",
        mount: otherContent,
        onfocus: function () {
            this.setBackground('#00AA00')
        },
        onblur: function () {
            this.setBackground('#555555')
        },
    });

    otherBox.removeControl("wb-max").removeControl("wb-full");
    
});

aboutButton.addEventListener('click', () => {

    const aboutBox = new WinBox({
        index:15,
        id: "about-window",
        title: "About Us",
        icon: "images/whale.png",
        border: "0.2em",
        width: "350px",
        height: "300px",
        x: "1125",
        /* For desktop computer :
        x: "1425", */
        y: "300",
        /* For desktop computer :
        y: "500", */
        mount: aboutContent,
        onfocus: function () {
            this.setBackground('#00AA00')
        },
        onblur: function () {
            this.setBackground('#555555')
        },
    });

    aboutBox.removeControl("wb-max").removeControl("wb-full");
    
});