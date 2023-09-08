block.style.background = 'green';
pp.style.color = 'white';

let cost = prompt('Стоимость товара');
let hav = prompt('Сколько денег у вас');



if((cost-hav) == 0){
	alert ('Покупка совершена');
}else{
	if((cost-hav) > 0){
		alert ('Для покупки не хватает ' + ' ' + (cost-hav) +' р.');
	}else{
			if((cost-hav) < 0){
			alert('Покупка совершена. Сдача ' + ' ' + (hav-cost) +' р.');
		}
	
	}
}
