import React from "react";
import { Link } from "react-router-dom";

export default function SiteLogo({ isDark }) {
	return (
		<picture className="">
			<Link to="/">
				{/* logo.svg */}
				<svg
					className={`undefined-text-0 w-44 ${!isDark && "fill-white"}`}
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					xmlns:svgjs="http://svgjs.dev/svgjs"
					width="1000"
					// height="131"
					viewBox="0 0 1000 131"
				>
					<g transform="matrix(1,0,0,1,-0.6060606060606233,0.3928940348091743)">
						<svg
							viewBox="0 0 396 52"
							data-background-color="#ffffff"
							preserveAspectRatio="xMidYMid meet"
							height="131"
							width="1000"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<g
								id="tight-bounds"
								transform="matrix(1,0,0,1,0.2400000000000091,-0.155957937481503)"
							>
								<svg
									viewBox="0 0 395.52 52.311915874962985"
									height="52.311915874962985"
									width="395.52"
								>
									<g>
										<svg
											viewBox="0 0 472.82 62.5357"
											height="52.311915874962985"
											width="395.52"
										>
											<g>
												<svg
													viewBox="0 0 472.82 62.5357"
													height="62.5357"
													width="472.82"
												>
													<g>
														<svg
															viewBox="0 0 472.82 62.5357"
															height="62.5357"
															width="472.82"
														>
															<g>
																<svg
																	viewBox="0 0 472.82 62.5357"
																	height="62.5357"
																	width="472.82"
																>
																	<g>
																		<svg>
																			<g></g>
																			<g></g>
																		</svg>
																	</g>
																	<g>
																		<svg>
																			<g>
																				<svg></svg>
																			</g>
																			<g></g>
																		</svg>
																	</g>
																	<g id="text-0">
																		<svg
																			viewBox="0 0 472.82 62.5357"
																			height="62.5357"
																			width="472.82"
																		>
																			<g transform="matrix(1,0,0,1,0,11.711948759114751)">
																				<svg
																					width="395.52"
																					viewBox="4.75 -38.25 390.8299865722656 38.650001525878906"
																					height="39.111802481770496"
																					data-palette-color="#000000"
																				>
																					<path
																						d="M4.75-36.8L15.9-36.8Q20.45-36.8 23.6-35.27 26.75-33.75 28.4-30.98 30.05-28.2 30.05-24.4L30.05-24.4Q30.05-22.15 29.38-19.88 28.7-17.6 27.23-15.75 25.75-13.9 23.28-12.78 20.8-11.65 17.2-11.65L17.2-11.65 12-11.65 12 0 4.75 0 4.75-36.8ZM12-18.7L17.15-18.7Q18.8-18.7 19.9-19.28 21-19.85 21.63-20.73 22.25-21.6 22.53-22.55 22.8-23.5 22.8-24.2L22.8-24.2Q22.8-24.75 22.63-25.68 22.45-26.6 21.9-27.55 21.35-28.5 20.23-29.15 19.1-29.8 17.2-29.8L17.2-29.8 12-29.8 12-18.7ZM60.25-36.8L67.5-36.8 67.5 0 60.25 0 60.25-14.95 43.8-14.95 43.8 0 36.55 0 36.55-36.8 43.8-36.8 43.8-21.95 60.25-21.95 60.25-36.8ZM74.75-18.35L74.75-18.35Q74.75-22.15 76.2-25.55 77.65-28.95 80.22-31.58 82.8-34.2 86.2-35.7 89.59-37.2 93.5-37.2L93.5-37.2Q97.34-37.2 100.75-35.7 104.15-34.2 106.77-31.58 109.4-28.95 110.87-25.55 112.34-22.15 112.34-18.35L112.34-18.35Q112.34-14.45 110.87-11.05 109.4-7.65 106.77-5.08 104.15-2.5 100.75-1.05 97.34 0.4 93.5 0.4L93.5 0.4Q89.59 0.4 86.2-1.05 82.8-2.5 80.22-5.08 77.65-7.65 76.2-11.05 74.75-14.45 74.75-18.35ZM82.25-18.35L82.25-18.35Q82.25-15.9 83.12-13.78 84-11.65 85.57-10.03 87.15-8.4 89.22-7.5 91.3-6.6 93.75-6.6L93.75-6.6Q96.09-6.6 98.12-7.5 100.15-8.4 101.65-10.03 103.15-11.65 104-13.78 104.84-15.9 104.84-18.35L104.84-18.35Q104.84-20.85 103.97-23 103.09-25.15 101.57-26.78 100.05-28.4 98-29.3 95.95-30.2 93.55-30.2L93.55-30.2Q91.15-30.2 89.09-29.3 87.05-28.4 85.5-26.78 83.95-25.15 83.09-23 82.25-20.85 82.25-18.35ZM115.84-29.8L115.84-36.8 140.64-36.8 140.64-29.8 131.69-29.8 131.69 0 124.44 0 124.44-29.8 115.84-29.8ZM144.14-18.35L144.14-18.35Q144.14-22.15 145.59-25.55 147.04-28.95 149.62-31.58 152.19-34.2 155.59-35.7 158.99-37.2 162.89-37.2L162.89-37.2Q166.74-37.2 170.14-35.7 173.54-34.2 176.17-31.58 178.79-28.95 180.27-25.55 181.74-22.15 181.74-18.35L181.74-18.35Q181.74-14.45 180.27-11.05 178.79-7.65 176.17-5.08 173.54-2.5 170.14-1.05 166.74 0.4 162.89 0.4L162.89 0.4Q158.99 0.4 155.59-1.05 152.19-2.5 149.62-5.08 147.04-7.65 145.59-11.05 144.14-14.45 144.14-18.35ZM151.64-18.35L151.64-18.35Q151.64-15.9 152.52-13.78 153.39-11.65 154.97-10.03 156.54-8.4 158.62-7.5 160.69-6.6 163.14-6.6L163.14-6.6Q165.49-6.6 167.52-7.5 169.54-8.4 171.04-10.03 172.54-11.65 173.39-13.78 174.24-15.9 174.24-18.35L174.24-18.35Q174.24-20.85 173.37-23 172.49-25.15 170.97-26.78 169.44-28.4 167.39-29.3 165.34-30.2 162.94-30.2L162.94-30.2Q160.54-30.2 158.49-29.3 156.44-28.4 154.89-26.78 153.34-25.15 152.49-23 151.64-20.85 151.64-18.35ZM218.84-19.25L218.84-3.7Q218.19-3 216.79-2.27 215.39-1.55 213.56-0.95 211.74-0.35 209.84 0.03 207.94 0.4 206.24 0.4L206.24 0.4Q201.74 0.4 198.14-0.93 194.54-2.25 191.99-4.63 189.44-7 188.09-10.25 186.74-13.5 186.74-17.35L186.74-17.35Q186.74-22.4 188.26-26.13 189.79-29.85 192.41-32.33 195.04-34.8 198.46-36 201.89-37.2 205.64-37.2L205.64-37.2Q209.19-37.2 212.14-36.43 215.09-35.65 217.14-34.5L217.14-34.5 214.79-27.75Q213.89-28.25 212.39-28.75 210.89-29.25 209.34-29.58 207.79-29.9 206.59-29.9L206.59-29.9Q203.59-29.9 201.29-29.15 198.99-28.4 197.41-26.9 195.84-25.4 195.04-23.18 194.24-20.95 194.24-18L194.24-18Q194.24-15.4 195.14-13.33 196.04-11.25 197.66-9.8 199.29-8.35 201.51-7.6 203.74-6.85 206.44-6.85L206.44-6.85Q207.99-6.85 209.29-7.08 210.59-7.3 211.49-7.8L211.49-7.8 211.49-12.25 205.14-12.25 205.14-19.25 218.84-19.25ZM230.09 0L222.94 0 239.53-38.25 239.94-38.25 256.54 0 248.14 0 237.53-26.9 242.79-30.5 230.09 0ZM232.03-7.2L234.28-13.3 245.34-13.3 247.89-7.2 232.03-7.2ZM261.88 0L261.88-36.8 269.13-36.8 269.13-7 286.43-7 286.43 0 261.88 0ZM296.93 0L289.78 0 306.38-38.25 306.78-38.25 323.38 0 314.98 0 304.38-26.9 309.63-30.5 296.93 0ZM298.88-7.2L301.13-13.3 312.18-13.3 314.73-7.2 298.88-7.2ZM349.63 0L325.73-36.8 334.98-36.8 358.98 0 349.63 0ZM334.23 0L325.23 0 338.33-20.6 341.73-13.3 334.23 0ZM345.98-17.05L342.23-23.3 349.83-36.8 358.63-36.8 345.98-17.05ZM374.53 0L374.53-11.45 360.98-36.8 369.93-36.8 379.43-17.7 377.28-17.55 386.63-36.8 395.58-36.8 381.78-11.45 381.78 0 374.53 0Z"
																						opacity="1"
																						transform="matrix(1,0,0,1,0,0)"
																						data-fill-palette-color="primary"
																					></path>
																				</svg>
																			</g>
																			<g>
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					xmlnsXlink="http://www.w3.org/1999/xlink"
																					version="1.1"
																					x="410.2843"
																					y="0"
																					viewBox="0 0 512 512"
																					enableBackground="new 0 0 512 512"
																					xmlSpace="preserve"
																					height="62.5357"
																					width="62.5357"
																					className="icon-c-0"
																					data-fill-palette-color="accent"
																					id="c-0"
																				>
																					<path
																						d="M480 32v320H32V32H480M512 0H0v512h512V0L512 0zM96 288h320L352 96l-96 128-64-64L96 288zM128 96c-17.688 0-32 14.313-32 32s14.313 32 32 32 32-14.313 32-32S145.688 96 128 96z"
																						data-fill-palette-color="accent"
																					></path>
																				</svg>
																			</g>
																		</svg>
																	</g>
																</svg>
															</g>
														</svg>
													</g>
												</svg>
											</g>
											<g></g>
										</svg>
									</g>
									<defs></defs>
								</svg>
								<rect
									width="395.52"
									height="52.311915874962985"
									fill="none"
									stroke="none"
									visibility="hidden"
								></rect>
							</g>
						</svg>
					</g>
				</svg>
			</Link>
		</picture>
	);
}