//  Wordpress Dependencies
import { __ } from "@wordpress/i18n";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { useDispatch } from "@wordpress/data";
import {
	MediaUpload,
	BlockControls,
	useBlockProps,
	MediaPlaceholder,
	MediaUploadCheck,
} from "@wordpress/block-editor";

// Internal Dependencies
import "./editor.scss";
import Inspector from "./inspector-controls";

import { edit } from "@wordpress/icons";

//  Swiper Dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import Icon from "./icon";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { minHeight, images, isNavigationUse, isPaginationUse } = attributes;

	let imageIds = images.map((image) => image.id);
	const { selectBlock } = useDispatch("core/block-editor");

	const hasImages = imageIds.length > 0;

	return (
		<div {...useBlockProps()} onClick={() => selectBlock(props.clientId)}>
			<Inspector {...props} />
			<BlockControls>
				{hasImages && (
					<ToolbarGroup>
						<MediaUploadCheck>
							<MediaUpload
								multiple
								gallery
								addToGallery={true}
								onSelect={(newImages) => setAttributes({ images: newImages })}
								allowedTypes={["image"]}
								value={imageIds}
								render={({ open }) => (
									<ToolbarButton icon={edit} onClick={open}>
										{__("Edit", "bs-image-slider")}
									</ToolbarButton>
								)}
							/>
						</MediaUploadCheck>
					</ToolbarGroup>
				)}
			</BlockControls>
			{images.length <= 0 && (
				<MediaPlaceholder
					icon={Icon}
					labels={{
						title: __("Image Slider", "bs-image-slider"),
						instructions: __(
							"A simple image slider block powered by block slider",
							"bs-image-slider"
						),
					}}
					onSelect={(images) => setAttributes({ images: images })}
					accept="image/*"
					allowedTypes={["image"]}
					multiple
				/>
			)}
			<Swiper
				navigation={isNavigationUse}
				pagination={isPaginationUse && { clickable: true }}
				modules={[Navigation, Pagination]}
				style={{ minHeight: minHeight }}
			>
				{hasImages &&
					images.map((image, index) => {
						return (
							<SwiperSlide key={index}>
								<figure>
									<img key={index} src={image.url} />
								</figure>
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
}
