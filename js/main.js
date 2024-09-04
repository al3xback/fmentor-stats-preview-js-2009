var cardEl = document.querySelector('.card');

/* String[number] access */
var imageFormats = '.jpg,.png';

var cardImageEl = cardEl.querySelector('.card__image img');
cardImageEl.src =
	'./images/meeting' +
	imageFormats[0] +
	imageFormats[1] +
	imageFormats[2] +
	imageFormats[3];

/* Object.create() */
var dummyImage = {
	alt: 'People at a meeting',
	loading: 'eager',
};
var image = Object.create(dummyImage);

cardImageEl.alt = image.alt;
cardImageEl.loading = image.loading;

/* Array.isArray() */
var marks = ['sight', 'insights'];
var marksIsAnArray = Array.isArray(marks);

var cardTitleSpanEl = cardEl.querySelector('.card__title mark');
cardTitleSpanEl.textContent = marksIsAnArray ? marks[marks.length - 1] : '';

/* Array forEach() */
var description = [
	'Discover the benefits of data analytics and make better decisions regarding revenue,',
	'customer experience,',
	'and overall efficiency.',
];

var descriptionText = '';
description.forEach(function (text) {
	descriptionText += text + ' ';
});

var cardDescriptionEl = cardEl.querySelector('.card__desc');
cardDescriptionEl.textContent = descriptionText.trim();

/* Property Getters and Setters */
var statuses = {
	set companyAmount(val) {
		this._companyAmount = val;
	},
	get companyAmount() {
		return this._companyAmount;
	},
	set templateAmount(val) {
		this._templateAmount = val;
	},
	get templateAmount() {
		return this._templateAmount;
	},
	set queryAmount(val) {
		this._queryAmount = val;
	},
	get queryAmount() {
		return this._queryAmount;
	},
};

statuses.companyAmount = '10K+';
statuses.templateAmount = '314';
statuses.queryAmount = '12M+';

var cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');
cardStatusItemEls[0].querySelector('.num').textContent = statuses.companyAmount;
cardStatusItemEls[1].querySelector('.num').textContent =
	statuses.templateAmount;
cardStatusItemEls[2].querySelector('.num').textContent = statuses.queryAmount;
