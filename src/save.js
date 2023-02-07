/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>

			<section className={'md-hero-container'} style={{ backgroundImage: `url(${attributes.media})` }}>
				<div className={'md-sub-container'}>
					<div className={'md-hero-title'}>
						<span className={'title1'}>{attributes.title1}</span><br/>
						<span className={'title2'}>{attributes.title2}</span>
					</div>
					<div className={'md-hero-description'}>
						{attributes.description}
					</div>
					<div className={'md-request-input'}>
						<input type={'email'} placeholder={'Email Address'}/>
						<button type={'submit'}>Request Access</button>
					</div>
					<div className={'md-brands'}>
						<div className={'md-brand-img'}>
							<img src={attributes.brand_1} />
						</div>
						<div className={'md-brand-img'}>
							<img src={attributes.brand_2} />
						</div>
						<div className={'md-brand-img'}>
							<img src={attributes.brand_3} />
						</div>
						<div className={'md-brand-img'}>
							<img src={attributes.brand_4} />
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}
