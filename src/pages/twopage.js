function twopage() {
    return(
        <>
            <div class="modal fade show" id="dialog" tabindex="-1" role="dialog" aria-labelledby="dialog" style="padding-right: 17px; display: block;">
	            <div class="modal-dialog" role="document" style="width: 500px; max-width: 500px;">
	                <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLabel">Оставить заявку</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                        </div>
                        <div class="modal-body" data-width="500px">
                            <form class="nomargin " data-url="/themes/shabloner_6607//forms/contact_form.php">
	                            <div class="form-group">
		                            <label for="">Введите имя </label>
		                            <input type="text" class="form-control" id="" name="data[0]" placeholder="Как к вам обращаться"/>
	                            </div>
	                            <div class="form-group">
		                            <label for="">Введите E-mail</label>
		                            <input type="text" class="form-control" id="" name="data[1]" placeholder="Контактный E-mail"/>
	                            </div>
	                            <div class="form-group">
		                            <label for="">Введите телефон</label>
		                            <input type="text" class="form-control" id="" name="data[2]" placeholder="Контактный телефон"/>
	                            </div>
	                            <div class="form-group">
		                            <label for="">Комментарий</label>
		                            <textarea class="form-control" id="" name="data[3]" rows="3"></textarea>
	                            </div>	
	                            <div class="form-group">
		                            <small id="emailHelp" class="form-text text-muted">Отправляя данную форму, вы даете свое согласие на обработку персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ "О персональных данных", на условиях и для целей, определенных <a target="_blank" href="/page/politika-konfidencialnosti">Политикой конфиденциальности</a></small>
	                            </div>
	                            <button type="submit" class="button button-rounded btn-block noleftmargin ">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Xf;