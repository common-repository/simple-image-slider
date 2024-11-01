//  Wordpress Dependencies
import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	ToggleControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const { minHeight, isNavigationUse, isPaginationUse } = attributes;
	
	return (
		<InspectorControls>
			<PanelBody
				title={__("Settings", "image-slider")}
				initialOpen={false}
			>
				<ToggleControl
					label={__("Use Navigation", "image-slider")}
					checked={isNavigationUse}
					onChange={() => setAttributes({ isNavigationUse: !isNavigationUse })}
				/>
				<ToggleControl
					label={__("Use Pagination", "image-slider")}
					checked={isPaginationUse}
					onChange={() => setAttributes({ isPaginationUse: !isPaginationUse })}
				/>
				<UnitControl
					min={0}
					value={minHeight}
					label={__("Min Height", "image-slider")}
					onChange={(newValue) => setAttributes({ minHeight: newValue })}
				/>
			</PanelBody>
		</InspectorControls>
	);
}

export default Inspector;
