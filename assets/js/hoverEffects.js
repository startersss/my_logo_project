const servs = document.querySelectorAll('.services_item');

		for (let item of servs) {

			item.onpointerover = function (e) {
				if (e.target && e.target.className == 'btn btn_services') {
					e.currentTarget.style.color = '#fff';
					e.currentTarget.style.boxShadow = '0 10px 10px -5px #0c0c0c';
					e.currentTarget.style.backgroundColor = '#00897b';
					e.target.style.backgroundColor = '#00897b';
					e.target.style.color = '#fff';
					e.target.style.border = '2px solid #fff';
					e.currentTarget.firstElementChild.style.filter = 'invert(100%)';
				}
			}
			item.onpointerout = function (e) {
				if (e.target && e.target.className == 'btn btn_services') {
					e.target.parentNode.style.backgroundColor = '#fff';
					e.target.parentNode.style.color = '#212121';
					e.target.parentNode.style.boxShadow = 'none';
					e.target.style.backgroundColor = '#fff';
					e.target.style.color = '#212121';
					e.target.style.border = '2px solid #212121';
					e.target.parentNode.firstElementChild.style.filter = 'invert(0%)';
				}
			}
		}

		const prices = document.querySelectorAll('.price_item');

		for (let item of prices) {

			item.onpointerover = function (e) {
				if (e.target && e.target.className == 'btn btn_price') {
					e.currentTarget.style.boxShadow = ' 10px 1px 10px 0px #cbcccc, 0 10px 10px 0px #cbcccc, -10px 3px 10px 0px #cbcccc, 0 -10px 0px 0px #f0f1f1';
					e.target.style.backgroundColor = '#00897b';
					e.target.style.color = '#fff';
					e.target.style.border = '2px solid #fff';
				}
			}
			item.onpointerout = function (e) {
				if (e.target && e.target.className == 'btn btn_price') {
					e.target.parentNode.style.boxShadow = 'none';
					e.target.style.backgroundColor = '#fff';
					e.target.style.color = '#212121';
					e.target.style.border = '2px solid #212121';
				}
			}
		}

		const teams = document.querySelectorAll('.team_item');

		teams.forEach((item, index)=>{
			item.addEventListener('pointerenter', function (e) {
				if (e.target && e.target.className == 'team_item') {
					let shar = document.querySelectorAll('.team_dot_item');
						shar[index].classList.add('active');
				}
			})
			item.addEventListener('pointerleave', function (e) {
				if (e.target && e.target.className == 'team_item') {
					let shar = document.querySelectorAll('.team_dot_item');
						shar[index].classList.remove('active');
				}
			})
		})