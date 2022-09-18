let sents='My name is Joshua Boyi'
let sents2='Am a web developer '

let first=document.getElementById('sen-1')
let ses=document.getElementById('sen-2')
let sendButton=document.querySelector('.send')
let notice= document.querySelector('.notification')
let feedbacks=document.querySelector(".feed")
let info=document.querySelector(".feed-info")
let portfolicDoc=document.querySelector(".portfolio")



first.innerHTML=""
ses.innerHTML=""

let idx=0, idx2=0
let int= setInterval(()=>{
	if (idx<=sents.length-1){
		first.innerHTML+=sents[idx]
		idx++
	}

	else if (idx2<=sents2.length-1){
		console.log("Yes")
		ses.innerHTML+=sents2[idx2]
		idx2++
	}

	else{
		clearInterval(int)
	}
}
,200)


document.addEventListener("scroll",(e)=>{
	console.log(window.scrollY)
})

let loop=document.querySelector(".feedback")
loop.addEventListener('submit',handleClick)

// sendButton.addEventListener('click',handleClick)

function handleClick(e){
	console.log(e)
	e.preventDefault()
	// if(feedback.value =="") return
	handleNotice(e)
}

//  Use sheety api to send the message to my google sheet ...


console.log(window.height)

function notify(e){	
	
	info.innerText= e || "Error Try again .."
	notice.classList.remove('closed')
	notice.classList.add("open")
	setTimeout(()=>{
		notice.classList.remove("open")
	},3000)
}


// Load Projects ....

let projects= [
	{
		title:"check Up (social)",
		imgURL:"p-imgs/check-up.png",
		liveLink:"https://vqze.netlify.app",
		sourceLink:"https://github.com/Joshua357954/check-up-react",
	},

	{
		title:"Memoriex (In Development)",
		imgURL:"p-imgs/memoriex.png",
		liveLink:"https://memoriex-app.netlify.app",
		sourceLink:"https://github.com/Joshua357954/memoriex-app",
	},
	{
		title:"Wordle Clone",
		imgURL:"p-imgs/word-fire.png",
		liveLink:"https://word-fire-182rpk6k7-joshua357954.vercel.app/",
		sourceLink:"https://github.com/Joshua357954/word-fire-game",
	},
	{
		title:"Hulu Clone",
		imgURL:"p-imgs/hulu.png",
		liveLink:"https://hulu-clone-kappa-ten.vercel.app/",
		sourceLink:"https://github.com/Joshua357954/hulu-clone",
	},
	{
		title:"NetFlix Clone",
		imgURL:"p-imgs/jetflixf.png",
		liveLink:"https://netflix-clone-phi-three.vercel.app/",
		sourceLink:"https://github.com/Joshua357954/netflix-clone",
	},
	{
		title:"Pomodoro App",
		imgURL:"p-imgs/pomodoro.png",
		liveLink:"https://pomodoro-1av9qfs9y-joshua357954.vercel.app/",
		sourceLink:"https://github.com/Joshua357954/pomodoro-app",
	},
	{
		title:"Memory Game",
		imgURL:"p-imgs/memory-game.png",
		liveLink:"https://memory-game-omega-five.vercel.app/",
		sourceLink:"https://github.com/Joshua357954/memory-game",
	},
	{
		title:"Starbucks Clone",
		imgURL:"p-imgs/starbucks.png",
		liveLink:"https://moonbuck-clone.vercel.app/",
		sourceLink:"https://github.com/Joshua357954/Moonbuck-clone-",
	},
	{
		title:"Tasker",
		imgURL:"p-imgs/tasker2.png",
		liveLink:"https://tasker-jade.vercel.app/",
		sourceLink:"https://github.com/Joshua357954/Tasker",
	},
	{
		title:"Cs-Funn(Form)",
		imgURL:"p-imgs/cs-funn-form.png",
		liveLink:"https://cs-form.vercel.app/",
		sourceLink:"https://github.com/Joshua357954/cs-form",
	},
	{
		title:"Foodler",
		imgURL:"p-imgs/foodler.png",
		liveLink:"https://loquacious-meerkat-4f6387.netlify.app/",
		sourceLink:"https://github.com/Joshua357954/foodle-app",
	},
	{
		title:"CountDown App",
		imgURL:"p-imgs/count-down2.png",
		liveLink:"https://count-downa-app.vercel.app/",
		sourceLink:"https://github.com/Joshua357954/count-downa-app",
	},
		{
		title:"PostMan Clone",
		sourceLink:"https://github.com/Joshua357954/post-man-clone",
	},
	{
		title:"Drawing App",
		imgURL:"p-imgs/draw.png",
		liveLink:"https://sprightly-sherbet-ec8ab2.netlify.app/",
		sourceLink:"https://github.com/Joshua357954/Draw-app",
	}

]

// portfolicDoc.innerHTML += `<div class='project'>
// 			<img src=${e.imgURL} alt=''>
// 			<p>${e.title}</p>
// 			<button class="btn1">View Live</button>
// 			<button class="btn2">Source Code</button> </div>`

projects.map(e => {
	
	return 	createProjectCard(e.imgURL,e.title,e.liveLink,e.sourceLink)

	})

function createProjectCard(img='',title,live,source){
	let pro=document.createElement('div')
	let idiv=document.createElement('img')
	let ptag=document.createElement('p')
	let bt1=document.createElement('a')
	let bt2=document.createElement('a')

	pro.classList.add("project")
	idiv.classList.add("img")
	bt1.classList.add("btn1")
	bt2.classList.add("btn2")

	bt1.href=live
	bt2.href=source


	ptag.innerText=title
	idiv.src=img
	bt1.innerText="View Live"
	bt2.innerText="Source Code"

	if(img)
		pro.appendChild(idiv)
	pro.appendChild(ptag)
	if(img)
		pro.appendChild(bt1)
	pro.appendChild(bt2)


	portfolicDoc.appendChild(pro)
}


// 3306
// password 4m5VdgHYhZ
// Send data to sheety api ...

async function handleNotice(e){

	if (!feedbacks.value) return 

	e.preventDefault()
	
	let drew = {
		feedback:{ "My People : ":feedbacks.value }
	}

	const data = {
		method:"GET",
		// body: JSON.stringify(drew)
	}
	

	let url = 'https://api.sheety.co/9c9131b74e93a891e24c213fc26b7da4/portfolioFeedbacks/feedbacks';
	
	try{
		const res = await fetch( url , data )
		console.log("Data : ",await res.json())
		notify("Thanks Alot :)")
		feedbacks.value=""
	}
	catch(error) {
		console.log("Error : ", error)
	}

}










// function notify(e){
// 	let div=document.createElement('div')
// 	let pee=document.createElement('p')
// 	div.classList.add("notification")
// 	pee.innerText=e
// 	div.append(pee)

// 	document.body.appendChild(div)

// 	div.classList.add("open")
// 	setTimeout(()=>{
// 		notice.classList.remove("open")
// 	},3000)
// }
