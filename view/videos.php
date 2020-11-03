<?php include_once("header.php");?>

		<section>

			<div id="call-to-action">
				<div class="container">
					<div class="row text-center">
						<h2>Videos</h2>
						<hr>
					</div>
					<div class="row">
						<video src="mp4/highlights.mp4" controls muted poster="img/highlights.jpg">
                        </video>
					</div>
				</div>	
			</div>

			<div id="news" class="container" style="top:0">

				<div class="row text-center">
					<h2>Latest News</h2>
					<hr>
				</div>

				<div class="row thumbnails owl-carousel owl-theme" >
					<div class="item" data-video="highlights">
						<div class="item-inner">
							<img src="img/highlights.jpg" alt="Noticia">
							<h3>Highlights</h3>
						</div>
					</div>
						<div class="item" data-video="Orlando_City_Foundation_2015">
							<div class="item-inner">
								<img src="img/Orlando_City_Foundation_2015.jpg" alt="Noticia">
								<h3>Orlando City Foundation 2015</h3>
							</div>
						</div>
					</div>
				</div>

		</section>

<?php include_once("footer.php");?>

	<script>
			$(function(){//o próprio código irá identificar a extensão do arquivo, sem a necessidade de informar se é mp4 ou jpg no data-video
				$(".thumbnails .item").on("click", function(){
					$("video").attr({
						"src":"mp4/"+$(this).data('video')+".mp4",
						"poster":"img/"+$(this).data('video')+".jpg"
					});
				});
			});
		</script>