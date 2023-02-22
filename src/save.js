/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

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
								<RichText.Content
									tagName="p"
									value={ attributes.title1 }
								/>
							</span>
							<span className={ 'title2' }>
								<RichText.Content
									tagName="p"
									value={ attributes.title2 }
								/>
							</span>
						</div>
						<div className={ 'md-pod-description' }>
							<RichText.Content
								tagName="p"
								value={ attributes.description }
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
