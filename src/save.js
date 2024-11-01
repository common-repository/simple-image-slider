import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const { images, isNavigationUse, isPaginationUse, minHeight } = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: "bs-image-slider bs-image-slider-container",
			})}
			data-navigation={isNavigationUse}
			data-pagination={isPaginationUse}
			style={{ minHeight: minHeight }}
		>
			<div class="bs-image-slider-wrapper">
				{images.length > 0 &&
					images.map((image, index) => {
						return (
							<div class="bs-image-slider-slide" key={index}>
								<figure>
									<img src={image.url} />
								</figure>
							</div>
						);
					})}
			</div>
			{isPaginationUse && (
				<div class="bs-image-slider-pagination bs-image-slider-pagination-bullets"></div>
			)}

			{isNavigationUse && <div class="bs-image-slider-button-prev"></div>}
			{isNavigationUse && <div class="bs-image-slider-button-next"></div>}
		</div>
	);
}
