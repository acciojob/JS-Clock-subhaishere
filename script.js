function rotate(){
	const currTime=new Date();

	const seconds=currTime.getSeconds();
	const secondDegrees=((seconds/60)*360)+90;
	const Hours=currTime.getHours();
	const HoursDegrees=((Hours/60)*360)+90;
	const Minutes=currTime.getMinutes();
	const MinutesDegrees=((Minutes/60)*360)+90;

	const secondHand=document.querySelector('.second-hand');
	secondHand.style.transform=`rotate(${secondDegrees}deg)`;

	const hourHand=document.querySelector('.hour-hand');
	hourHand.style.transform= `rotate(${HoursDegrees}deg)`;

	const minutesHand=document.querySelector('.min-hand');
	minutesHand.style.transform =`rotate(${MinutesDegrees}deg)`;
}


setInterval(rotate, 1000);