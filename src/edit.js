/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	AlignmentControl,
	BlockControls,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from '@wordpress/block-editor';

import {
	Button,
	Panel,
	PanelBody,
	PanelRow,
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import hero_bg from '../assets/images/hero-bg.png';
import hero_bg_tablet from '../assets/images/hero-bg-tablet.png';
import hero_bg_mobile from '../assets/images/hero-bg-mobile.png';
import bg_pattern from '../assets/images/bg-pattern.png';
import brand_1 from '../assets/images/brand-1.png';
import brand_2 from '../assets/images/brand-2.png';
import brand_3 from '../assets/images/brand-3.png';
import brand_4 from '../assets/images/brand-4.png';
import logo from '../assets/images/logo.png';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const setDefaults = () => {
		setAttributes( {
			logo: logo,
			brand_1: brand_1,
			brand_2: brand_2,
			brand_3: brand_3,
			brand_4: brand_4,
		} );
	};

	const onChangeAlign = ( newValue ) => {
		setAttributes( { align: newValue === undefined ? 'none' : newValue } );
	};

	const onBgImgSelectSet = ( image ) => {
		setAttributes( { media_id: image.id, media: image.url } );
	};

	const onBgImgClear = () => {
		setAttributes( { media: '', media_id: '' } );
		hero_bg = '';
	};

	const ALLOWED_MEDIA_TYPES = [ 'image' ];

	return (
		<div { ...useBlockProps() }>
			{ setDefaults() }

			<InspectorControls>
				<Panel header="MD Hero">
					<React.Fragment key=".0">
						<PanelBody title="Background">
							<PanelRow>
								<div>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={ ( media ) => {
												onBgImgSelectSet( media );
											} }
											allowedTypes={ ALLOWED_MEDIA_TYPES }
											value={ attributes.media_id }
											render={ ( { open } ) => (
												<div>
													{ attributes.media && (
														<img
															id={
																'select-img-preview'
															}
															src={
																attributes.media
															}
															style={ {
																display:
																	'block',
																height: '200px',
																width: '288px',
																backgroundColor:
																	'#ddd',
																marginBottom:
																	'10px',
															} }
														></img>
													) }
													<Button
														variant="secondary"
														onClick={ open }
														text={
															attributes.media
																? 'Change Image'
																: 'Add Image'
														}
														style={ {
															marginRight: '20px',
														} }
													></Button>
													<Button
														variant="tertiary"
														onClick={ onBgImgClear }
														text={ 'Clear' }
													></Button>
												</div>
											) }
										/>
									</MediaUploadCheck>
								</div>
							</PanelRow>
						</PanelBody>
					</React.Fragment>
				</Panel>
			</InspectorControls>

			<BlockControls>
				<AlignmentControl
					value={ attributes.align }
					onChange={ onChangeAlign }
				/>
			</BlockControls>

			<div className={ 'container is-fluid md-pod-container' }>
				<div className={ 'logo' }>
					<img src={ logo } alt={ '' } />
				</div>
				<div className={ 'columns' }>
					<div
						className={
							'column is-full-mobile is-three-quarters-tablet is-two-thirds-desktop md-pod-content'
						}
					>
						<div className={ 'md-pod-title' }>
							<span className={ 'title1' }>
								<RichText
									tagName="p"
									className={ '' }
									value={ attributes.title1 }
									onChange={ ( title1 ) =>
										setAttributes( { title1 } )
									}
								/>
							</span>
							<span className={ 'title2' }>
								<RichText
									tagName="p"
									className={ '' }
									value={ attributes.title2 }
									onChange={ ( title2 ) =>
										setAttributes( { title2 } )
									}
								/>
							</span>
						</div>
						<div className={ 'md-pod-description' }>
							<RichText
								tagName="p"
								className={ '' }
								value={ attributes.description }
								onChange={ ( description ) =>
									setAttributes( { description } )
								}
							/>
						</div>
						<div className={ 'md-request-input' }>
							<input
								type={ 'email' }
								placeholder={ 'Email Address' }
							/>
							<button type={ 'submit' }>Request Access</button>
						</div>
						<div className={ 'md-brands' }>
							<div className={ 'md-brand-img' }>
								<img src={ attributes.brand_1 } />
							</div>
							<div className={ 'md-brand-img' }>
								<img src={ attributes.brand_2 } />
							</div>
							<div className={ 'md-brand-img' }>
								<img src={ attributes.brand_3 } />
							</div>
							<div className={ 'md-brand-img' }>
								<img src={ attributes.brand_4 } />
							</div>
						</div>
					</div>
					<div className={ 'column' }></div>
				</div>
				<div className={ 'md-pod-bg-pattern' }>
					<img src={ bg_pattern } alt={ '' } />
				</div>
			</div>
		</div>
	);
}
