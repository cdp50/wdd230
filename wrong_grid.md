<main >
    <div class="box hero">
        <p>Hero with site name call to action</p>
    </div>
    <div class="box gone">
        <p>Event</p>
    </div>
    <div class="box gone">
        <p>Weather</p>
    </div>
    <div class="box news">
        <p>News release</p>
    </div>
    <div class="spotlight-parent">
        <div class="spotlight-child">
            <p>Spotlight 1</p>
        </div>
        <div class="spotlight-child">
            <p>Spotlight 2</p>
        </div>
        <div class="spotlight3">
            <p>Spotlight 3</p>
        </div>
    </div>
    <div class="box-medium medium joinMax">
        <p>Join</p>
    </div>
    <div class="medium-event-weather medium">
        <div class="box-medium event">
            <p>Event</p>
        </div>
        <div class="box-medium weather">
            <p>Weather</p>
        </div>
    </div>
</main>

main {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.box {
    border: 3px solid #ffff;
    width: 70%;
    height: 200px;
    margin: auto;
    margin-bottom: 12px;
    background-color: rgb(157, 207, 157);
}

.spotlight-parent{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    border: 3px solid #ffff;
    width: 70%;
    height: 400px;
    margin: auto;
    margin-bottom: 12px;
    background-color: rgb(157, 207, 157);
}
.spotlight-child {
    border: 3px solid #ffff;
    width: 90%;
    height: 45%;
    margin: auto;
}
footer {
    background-color: #729342;
}
.logo-footer {
    display: block;
    width: 100%;
    max-width: 400%;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 0.5%;
}
.line-1 {
    height: 1px;
    background: black;
    margin-top: 15px;
    margin-bottom: 15px;
}
.medium {
    display: none;
}
.spotlight3 {
    display: none;
}
@media screen and (min-width: 700px){
    main {
        display: grid;
        grid-template-columns: 1fr;
        margin: auto;
    }
    .gone {
        display: none;
    }
    .medium {
        display: grid;
    }
    .spotlight-parent {
        display: grid;
        grid-template-columns: 1fr 1fr ;
        height: 200px;
    }
    .spotlight-child {
        height: 85%;
    }
    .medium p{
        visibility: visible;
        margin-top: 16px;
    }
    .medium-event-weather {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 71%;
        height: 200px;
        margin: 0 auto;
        margin-bottom: 1.5%;
    }
    .box-medium {
        border: 3px solid #ffff;
        width: 70%;
        height: 200px;
        margin: auto;
        margin-bottom: 12px;
        background-color: rgb(157, 207, 157);
    }
    .event {
        grid-column: 1 / 3;
        width: 95%;
        height: 95%;
        margin-right: 5%;
    }
    .weather {
        grid-column: 3 / 4;
        width: 95%;
        height: 95%;
    }   
    .upFooter {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .upF2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .downFooter {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        height: 5%;
    }
    .lastM {
        grid-column: 2 / 3;
        grid-row: 2 /3;
    }
}
@media screen and (min-width: 1000px){
    main {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        /* margin-left: 2.5%;
        margin-right: 2.5%;
        margin-bottom: 1.2%; */
        margin: 2.5%;
        margin-right: 4%;
        /* height: 800px; */
        gap: 1%;


    }
    .hero{
        grid-column: 2 / 4;
        grid-row: 1 / 3;
        height: 95%;
        width: 100%;
        /* margin: 0%;
        padding: 0%; */
    }
    .medium-event-weather{
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        
    }
    .joinMax { 
        grid-column: 1 / 2;
        grid-row: 3 / 4;
        height: 95%;
        width: 95%;
        /* margin: 0%; */
    }
    .news{
        grid-column: 2 / 4;
        grid-row: 3 / 4;
        width: 100%;
    }
    .box{
        margin-bottom: 0%;
    }
    .spotlight-parent{
        grid-column: 4 / 5;
        grid-row: 1 / 4;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        /* margin: 5%; */
    }
    .spotlight3{
        display: grid;
        border: 3px solid #ffff;
        width: 90%;
        height: 30%;
        /* margin: auto; */
    }
    .spotlight-child{
        height: 30%;
    }
    .event {
        margin: 0%;
    }
    .weather{
        margin: 0%;
    }
    
}







