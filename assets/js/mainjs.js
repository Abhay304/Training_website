$(document).ready(function () {
	//
	$('.mbnav').on('click', function () {
		$('.navblock').slideToggle();
	});
	
	
	//
	updateClassSchedule("monday");
	$('.schday').on('mouseover', function () {
		//var value= this.id;
		$('.schday').removeClass('active')
		updateClassSchedule(this.id);
		$('#'+this.id).addClass('active');
	});
	
	$('#close').on('click', function () {
		$('.modalwrapper').fadeOut();
	});
	
	$('#class0').css('color','#ED563B');
});

//
const tranNameArr=['First Training class','Second Class Training','Third Class Training','Fourth Class Training'];
const tranImgArr=['training-image-01','training-image-02','training-image-03','training-image-04'];
const trnClassContArr = ['Training studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business websites', 'tTraining studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business websites two', 'Training studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business websites three','Training studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business websites four'];

function tranningClasses(val){
	for(let i=0;i<tranNameArr.length;i++){
		$('#class'+i).css('color','');
		if(val == 'class'+i){
			$('#img').attr("src", './assets/images/' + tranImgArr[i] +'.jpg');
			$('#trainTitle').text(tranNameArr[i]);
			$('#class-content').text(trnClassContArr[i]);
			$('#class'+i).css('color','#ED563B');
		}
	}
}


const formFieldArr =['name','email','subject','message']

function formvalidation(){
	for(i=0;i<formFieldArr.length;i++){
		if($('#'+formFieldArr[i]).val()==""){
			$('.cmn-errText'+i).fadeIn();
			return false;
		}else {
			$('.cmn-errText'+i).fadeOut();
		}
	}
	
	$('.modalwrapper').fadeIn();
}

//Class schedule

const scheduleData =[
{
	"day":"monday",
	"sch":[
	{ "trainer": "William", "class": "Fitness Class", "timeslot": "1", "time": "10.00AM - 11.30AM","row":"1"},
	{ "trainer": "boyd", "class": "Body Building", "timeslot": "2", "time": "8.00AM - 09.30AM", "row": "3"}
	]
},
{
	"day":"tuesday",
	"sch":[
	{ "trainer": "Paul", "class": "Yoga Training Class", "timeslot": "2", "time": "10.00AM - 11.30AM","row":"4" },
	{ "trainer": "Hoister", "class": "Advance training class", "timeslot": "1", "time": "8.00AM - 09.30AM","row":"5" }
	]
},
{
	"day":"wednesday",
	"sch":[
	{ "trainer": "Jilson", "class": "Muscle Training", "timeslot": "2", "time": "10.00AM - 11.00AM","row":"2" },
	{ "trainer": "Jim", "class": "Advance training class", "timeslot": "1", "time": "8.00AM - 09.30AM","row":"5" }
	]
},
{
	"day":"thursday",
	"sch":[
	{ "trainer": "Abhay", "class": "Advance training class", "timeslot": "1", "time": "10.00AM - 11.00AM","row":"5" },
	{ "trainer": "Jones", "class": "Yoga Training class	", "timeslot": "2", "time": "8.00AM - 09.30AM","row":"4" }
	]
},
{
	"day":"friday",
	"sch":[
	{ "trainer": "Vilsom", "class": "Yoga Training class", "timeslot": "2", "time": "10.00AM - 11.30AM","row":"1"},
	{ "trainer": "Linda", "class": "Body Building", "timeslot": "1", "time": "8.00AM - 09.30AM", "row": "4"}
	]
}
]

function updateClassSchedule(val){
	$('.timeslot1').text('');
	$('.timeslot2').text('');
	$('.trainer').text('');
	// console.log(val);
	for (const key in scheduleData) {
		if (scheduleData.hasOwnProperty(key)) {
			const element = scheduleData[key];
			if (val == element.day){
				var schdata = element.sch;
				for (const key1 in element.sch) {
					if (element.sch.hasOwnProperty(key1)) {
						const element1 = element.sch[key1];
						$('#row' + element1.row + " .timeslot" + element1.timeslot).text(element1.time);
						$('#row' + element1.row + " .trainer").text(element1.trainer);
					}
				}
			}
		}
	}
}


