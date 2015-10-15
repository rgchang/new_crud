var list;
var order_list;

var read_color_array;
var update_color_array;

var list_elements_array;
var old_color;
var new_color;



var list_of_colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine','Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed ', 'Indigo ', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen' ];

function log(message_to_log){
	console.log(message_to_log);
}

function random_color(){
	return list_of_colors[
	Math.floor(
		Math.random()*list_of_colors.length)];
};

function create_order_list(){
	list = document.createElement('li');
	order_list = document.getElementById('order_list');
};

function append_list_to_order_list(){
	list.style.backgroundColor = list.textContent;
	order_list.appendChild(list);
};

function update_list_elements(){
    
    list_elements_array = document.getElementsByTagName('li');
    return list_elements_array;

};

document.addEventListener('DOMContentLoaded',function(){
	var button = document.getElementsByTagName('span');
	var create_button = button[0];
	var read_button = button[1];
	var update_button = button[2];
	var delete_button = button[3];

	var input = document.getElementsByTagName('input');
	var create_input = input[0];
	var read_input = input[1];
	var update_input = input[2];
	var delete_input = input[3];

	create_button.addEventListener('click', function(){
		create_order_list();
		list.innerText = create_input.value;

		if(create_input.value === '' || create_input.value === null){
			list.textContent = random_color();
			list.style.backgroundColor = list.textContent;

		}

		append_list_to_order_list();

		create_input.value = '';

	});

	read_button.addEventListener('click', function(){
		create_order_list();

		read_color_array = String(read_input.value).toLowerCase();
	
		read_color_array = read_color_array.split(',');
			
		if(read_color_array.length > 1){

			for(var i = 0; i < read_color_array.length; i++){
				list = document.createElement('li');
				list.textContent = read_color_array[i];
				list.style.backgroundColor = list.textContent;

				append_list_to_order_list();
				read_input.value = '';

			}
		}

	});






	update_button.addEventListener('click', function(){

		update_color_array = String(update_input.value).toLowerCase();
		update_color_array = update_color_array.split(',');

		update_list_elements();
		if(list_elements_array.length > 0){
			old_color = String(update_input.value).toLowerCase().split(',');
			old_color = old_color[0];

			new_color = String(update_input.value).toLowerCase().split(',');
			new_color = new_color[1];

			update_input.value = '';

			for(var i = 0; i < list_elements_array.length; i++){
				if(list_elements_array[i].style.backgroundColor === old_color){
					list_elements_array[i].style.backgroundColor = new_color;
					list_elements_array[i].textContent = new_color;
				}
			}

			for(var i = 0; i < list_of_colors.length; i++){
				if(list_of_colors[i].style.backgroundColor === old_color){
					list_of_colors[i].style.backgroundColor = new_color;
					list_of_colors[i].textContent = new_color;
				}
			}

			update_list_elements();

		}

	});







	delete_button.addEventListener('click', function(){

		if(delete_input.value.length > 0){
			update_list_elements();

			element_to_delete = String(delete_input.value).toLowerCase();

			for(var i = 0; i < list_elements_array.length; i++){
				if(list_elements_array[i].textContent === element_to_delete){
					list_elements_array[i].remove();

					i = i-1;

					delete_input.value = '';
					update_list_elements();
				}
			}
		}

	});


 
});