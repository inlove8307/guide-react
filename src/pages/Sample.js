import React from "react";
//UTILS
import { getParents, getClosest } from "utils/dom";
// LAYOUT
import UxLayout from "components/layout/UxLayout";
import UxSection from "components/layout/UxSection";
import UxArticle from "components/layout/UxArticle";
import UxTitle from "components/layout/UxTitle";
import UxContent from "components/layout/UxContent";
import UxDock from "components/layout/UxDock";
// BASE
import UxBadge from "components/base/UxBadge";
import UxButton from "components/base/UxButton";
import UxCheckbox from "components/base/UxCheckbox";
import UxChip from "components/base/UxChip";
import UxDivider from "components/base/UxDivider";
import UxFile from "components/base/UxFile";
import UxImage from "components/base/UxImage";
import UxInput from "components/base/UxInput";
import UxLink from "components/base/UxLink";
import UxPassword from "components/base/UxPassword";
import UxRadio from "components/base/UxRadio";
import UxRange from "components/base/UxRange";
import UxSelect from "components/base/UxSelect";
import UxSwitch from "components/base/UxSwitch";
import UxText from "components/base/UxText";
import UxTextarea from "components/base/UxTextarea";
// MIXIN
import UxAlert from "components/mixin/UxAlert";
import UxBreadcrumb from "components/mixin/UxBreadcrumb";
import UxCalendar from "components/mixin/UxCalendar";
import UxCard from "components/mixin/UxCard";
import UxCollapse from "components/mixin/UxCollapse";
import UxConfirm from "components/mixin/UxConfirm";
import UxDatepicker from "components/mixin/UxDatepicker";
import UxDropdown from "components/mixin/UxDropdown";
import UxField from "components/mixin/UxField";
import UxFieldset from "components/mixin/UxFieldset";
import UxFilter from "components/mixin/UxFilter";
import UxForm from "components/mixin/UxForm";
import UxGroup from "components/mixin/UxGroup";
import UxInfo from "components/mixin/UxInfo";
import UxKeypad from "components/mixin/UxKeypad";
import UxList from "components/mixin/UxList";
import UxMasking from "components/mixin/UxMasking";
import UxModal from "components/mixin/UxModal";
import UxPagination from "components/mixin/UxPagination";
import UxPopover from "components/mixin/UxPopover";
import UxProgress from "components/mixin/UxProgress";
import UxSwiper from "components/mixin/UxSwiper";
import UxTab from "components/mixin/UxTab";
import UxTable from "components/mixin/UxTable";
import UxTimeline from "components/mixin/UxTimeline";
import UxToast from "components/mixin/UxToast";
import UxToggle from "components/mixin/UxToggle";
import UxTooltip from "components/mixin/UxTooltip";
// IMAGE
import image from "assets/image/sample/image_01.png"

const Page = () => {
	return (
		<UxLayout>
			<UxSection>
				<UxArticle>
					<UxTitle>
						<h3>SAMPLE</h3>
					</UxTitle>
					<UxContent>

						{/* BASE */}
						<UxGroup className="flex wrap">
							<UxButton
								label="UxButton"
								onClick={(event)=>{console.log("UxButton onClick", event);}}
							/>
							<UxButton
								label="UxButton"
								icon={
									<span
										className="ux-icon-clear"
										align="left"
									/>
								}
								onClick={(event)=>{console.log("UxButton onClick", event);}}
							/>
							<UxButton
								label="UxButton"
								icon={<span className="ux-icon-clear" />}
								onClick={(event)=>{console.log("UxButton onClick", event);}}
							/>
							<UxButton
								icon={<span className="ux-icon-clear"/>}
								onClick={(event)=>{console.log("UxButton onClick", event);}}
							/>
						</UxGroup>

						<UxGroup className="flex wrap">
							<UxChip
								label="UxChip"
								onClick={(event)=>{console.log("UxChip onClick", event);}}
							/>
							<UxChip
								label="UxChip"
								onClick={(event)=>{console.log("UxChip onClick", event);}}
								icon={
									<span
										role="presentation"
										className="ux-icon-clear white"
										onClick={(event)=>{console.log("UxChip Icon onClick", event);}}
									/>
								}
							/>
						</UxGroup>

						<UxGroup className="flex wrap">
							<UxLink
								href="#"
								label="UxLink"
							/>
							<UxLink
								className="underline"
								href="#"
								label="UxLink Underline"
							/>
							<UxLink
								href="#"
								label="UxLink Icon"
								icon={<span className="ux-icon-arrow-right" />}
							/>
						</UxGroup>

						<UxBadge label="99" />

						<UxDivider className="sm"/>
						<UxDivider className="md"/>
						<UxDivider className="lg"/>
						<UxDivider className="dash"/>

						<UxImage
							className="full"
							src={image}
							alt="UxImage Alt"
						>
							UxImage Figcaption
						</UxImage>

						<UxForm>
							<UxFieldset>
								<UxField
									label="UxInput Suffix"
									message="Message"
								>
									<UxInput
										align="right"
										placeholder="입력하세요."
										suffix="원"
										clear
									/>
								</UxField>

								<UxField
									label="UxInput Prefix"
									message="Message"
								>
									<UxInput
										prefix="$"
										placeholder="입력하세요."
										clear
									/>
								</UxField>

								<UxField
									label="UxInput Submit"
									message="Message"
								>
									<UxInput
										placeholder="입력하세요."
										button="전송"
										timer="05:00"
										clear
									/>
								</UxField>

								<UxField
									label="UxInput Icon"
									message="Message"
								>
									<UxInput
										placeholder="입력하세요."
										icon="ux-icon-calendar"
										clear
										onIconClick={(event)=>{console.log("UxInput onIconClick", event);}}
									/>
								</UxField>
							</UxFieldset>

							<UxFieldset>
								<UxField
									label="UxInput Valid"
									message="Message"
									result="Result"
									valid
								>
									<UxInput
										value="valid"
										placeholder="입력하세요."
										clear
									/>
								</UxField>

								<UxField
									label="UxInput Invalid"
									message="Message"
									result="Result"
									invalid
								>
									<UxInput
										value="invalid"
										placeholder="입력하세요."
										clear
									/>
								</UxField>

								<UxField
									label="UxInput Readonly"
									message="Message"
									readonly
								>
									<UxInput
										value="Readonly"
										placeholder="입력하세요."
										prefix="prefix"
										suffix="suffix"
										button="전송"
										timer="05:00"
										clear
									/>
								</UxField>

								<UxField
									label="UxInput Disabled"
									message="Message"
									disabled
								>
									<UxInput
										value="Disabled"
										placeholder="입력하세요."
										prefix="prefix"
										suffix="suffix"
										button="전송"
										timer="05:00"
										clear
									/>
								</UxField>
							</UxFieldset>

							<UxFieldset>
								<UxField
									label="UxPassword"
									message="Message"
								>
									<UxPassword
										mask="7"
										clear
									/>
								</UxField>

								<UxField
									label="UxPassword Readonly"
									message="Message"
									readonly
								>
									<UxPassword
										mask="7"
										clear
									/>
								</UxField>

								<UxField
									label="UxPassword Disabled"
									message="Message"
									disabled
								>
									<UxPassword
										mask="7"
										clear
									/>
								</UxField>
							</UxFieldset>

							<UxFieldset>
								<UxField
									label="UxInput UxPassword"
									message="Message"
								>
									<UxGroup
										className="flex"
										field
										dash
									>
										<UxInput
											className="grow"
											value="010"
										/>
										<UxPassword
											className="grow"
											mask="4"
										/>
										<UxPassword
											className="grow"
											mask="4"
										/>
									</UxGroup>
								</UxField>

								<UxField
									label="UxInput UxPassword Readonly"
									message="Message"
									readonly
								>
									<UxGroup
										className="flex"
										field
										dash
									>
										<UxInput
											className="grow"
											value="010"
										/>
										<UxPassword
											className="grow"
											mask="4"
										/>
										<UxPassword
											className="grow"
											mask="4"
										/>
									</UxGroup>
								</UxField>

								<UxField
									label="UxInput UxPassword Disabled"
									message="Message"
									disabled
								>
									<UxGroup
										className="flex"
										field
										dash
									>
										<UxInput
											className="grow"
											value="010"
										/>
										<UxPassword
											className="grow"
											mask="4"
										/>
										<UxPassword
											className="grow"
											mask="4"
										/>
									</UxGroup>
								</UxField>
							</UxFieldset>

							<UxFieldset>
								<UxField
									label="UxTextarea"
									message="Message"
									result="Result"
								>
									<UxTextarea
										maxLength="300"
										placeholder="300자 이내로 작성해 주세요."
										fluid
									/>
								</UxField>

								<UxField
									label="UxTextarea Valid"
									message="Message"
									result="Result"
									valid
								>
									<UxTextarea
										maxLength="300"
										placeholder="300자 이내로 작성해 주세요."
										value="Valid"
										fluid
									/>
								</UxField>

								<UxField
									label="UxTextarea Invalid"
									message="Message"
									result="Result"
									invalid
								>
									<UxTextarea
										maxLength="300"
										placeholder="300자 이내로 작성해 주세요."
										value="Invalid"
										fluid
									/>
								</UxField>

								<UxField
									label="UxTextarea Readonly"
									message="Message"
									result="Result"
									readonly
								>
									<UxTextarea
										maxLength="300"
										placeholder="300자 이내로 작성해 주세요."
										value="Readonly"
										fluid
									/>
								</UxField>

								<UxField
									label="UxTextarea Disabled"
									message="Message"
									result="Result"
									disabled
								>
									<UxTextarea
										maxLength="300"
										placeholder="300자 이내로 작성해 주세요."
										value="Disabled"
										fluid
									/>
								</UxField>
							</UxFieldset>

							<UxFieldset>
								<UxField
									label="UxFile"
									message="Message"
								>
									<UxFile placeholder="파일 버튼을 클릭하세요." />
								</UxField>
							</UxFieldset>

							<UxFieldset>
								<UxField
									label="UxSelect"
									message="Message"
								>
									<UxSelect
										placeholder="선택해주세요."
										onSelect={(props) => {console.log("UxSelect onSelect", props);}}
									>
										<span data-value="0" data-label="React" />
										<span data-value="1" data-label="Vue" />
										<span data-value="2" data-label="Svelte" />
									</UxSelect>
								</UxField>

								<UxField
									label="UxSelect Valid"
									message="Message"
									result="Result"
									valid
								>
									<UxSelect
										placeholder="선택해주세요."
										value="0"
										onSelect={(props) => {console.log("UxSelect onSelect", props);}}
									>
										<span data-value="0" data-label="React" />
										<span data-value="1" data-label="Vue" />
										<span data-value="2" data-label="Svelte" />
									</UxSelect>
								</UxField>

								<UxField
									label="UxSelect Invalid"
									message="Message"
									result="Result"
									invalid
								>
									<UxSelect
										placeholder="선택해주세요."
										value="0"
										onSelect={(props) => {console.log("UxSelect onSelect", props);}}
									>
										<span data-value="0" data-label="React" />
										<span data-value="1" data-label="Vue" />
										<span data-value="2" data-label="Svelte" />
									</UxSelect>
								</UxField>

								<UxField
									label="UxSelect Readonly"
									message="Message"
									readonly
								>
									<UxSelect
										placeholder="선택해주세요."
										value="0"
										onSelect={(props) => {console.log("UxSelect onSelect", props);}}
									>
										<span data-value="0" data-label="React" />
										<span data-value="1" data-label="Vue" />
										<span data-value="2" data-label="Svelte" />
									</UxSelect>
								</UxField>

								<UxField
									label="UxSelect Disabled"
									message="Message"
									disabled
								>
									<UxSelect
										placeholder="선택해주세요."
										value="0"
										onSelect={(props) => {console.log("UxSelect onSelect", props);}}
									>
										<span data-value="0" data-label="React" />
										<span data-value="1" data-label="Vue" />
										<span data-value="2" data-label="Svelte" />
									</UxSelect>
								</UxField>

								<UxField
									label="UxSelect UxInput"
									message="Message"
									result="Result"
								>
									<UxGroup
										className="flex"
										field
									>
										<UxSelect
											placeholder="선택해주세요."
											onSelect={(props) => {console.log("UxSelect onSelect", props);}}
											size="120"
										>
											<span data-value="0" data-label="React" />
											<span data-value="1" data-label="Vue" />
											<span data-value="2" data-label="Svelte" />
										</UxSelect>
										<UxInput
											className="grow"
											placeholder="입력하세요."
										/>
									</UxGroup>
								</UxField>
							</UxFieldset>

							<UxFieldset>
								<UxField
									label="UxCheckbox"
									message="Message"
								>
									<UxGroup
										className="flex"
										checkbox
									>
										<UxCheckbox
											className="grow"
											label="Unchecked"
										/>
										<UxCheckbox
											className="grow"
											checked={true}
											label="Checked"
										/>
									</UxGroup>
								</UxField>

								<UxField
									label="UxCheckbox Disabled"
									message="Message"
									disabled
								>
									<UxGroup
										className="flex"
										checkbox
									>
										<UxCheckbox
											className="grow"
											label="Unchecked"
										/>
										<UxCheckbox
											className="grow"
											checked={true}
											label="Checked"
										/>
									</UxGroup>
								</UxField>
							</UxFieldset>

							<UxFieldset>
								<UxField
									label="UxRadio"
									message="Message"
								>
									<UxGroup
										className="flex"
										radio
										name="RADIO01"
										selected="A"
										onChange={(event)=>{console.log(event)}}
									>
										<UxRadio
											className="grow"
											label="Unselected"
											value="A"
										/>
										<UxRadio
											className="grow"
											label="selected"
											value="B"
										/>
									</UxGroup>
								</UxField>

								<UxField
									label="UxRadio Disabled"
									message="Message"
									disabled
								>
									<UxGroup
										className="flex"
										radio
										name="RADIO02"
										selected="A"
									>
										<UxRadio
											className="grow"
											label="Unselected"
											value="A"
										/>
										<UxRadio
											className="grow"
											label="selected"
											value="B"
										/>
									</UxGroup>
								</UxField>
							</UxFieldset>

							<UxFieldset>
								<UxField
									label="UxSwitch"
									message="Message"
								>
									<UxSwitch
										checked={false}
										labelLeft="LIGHT"
										labelRight="DARK"
									/>
								</UxField>
							</UxFieldset>
						</UxForm>

						<UxRange>UxRange</UxRange>

						<UxText
							className="md"
							prefix="-"
							label="A relatively simple way to handle the above code would be pass all as value to dependency array of useEffect so that you don't worry about loadData being executed after state update"
						/>

						<UxText
							className="md"
							bullet="dot"
							label="A relatively simple way to handle the above code would be pass all as value to dependency array of useEffect so that you don't worry about loadData being executed after state update"
						/>

						{/* MIXIN */}
						<UxAlert>UxAlert</UxAlert>
						<UxBreadcrumb>UxBreadcrumb</UxBreadcrumb>
						<UxCalendar>UxCalendar</UxCalendar>
						<UxCard>UxCard</UxCard>

						<UxCollapse
							once
							// onClick={(event, index)=>{console.log("UxCollapse All")}}
						>
							<div data-expanded={true}>
								<button
									type="button"
									data-role="button"
									// onClick={() => {console.log("UxCollapse button1");}}
								>
									<span>UxCollapse1</span>
								</button>
								<div data-role="content">
									<UxInfo
										data={[
											{ label: "label1", value: "value1" },
											{ label: "label2", value: "value2" },
											{ label: "label3", value: "value3" },
										]}
									/>
								</div>
							</div>
							<div data-expanded={false}>
							<button
									type="button"
									data-role="button"
									// onClick={() => {console.log("UxCollapse button2");}}
								>
									<span>UxCollapse2</span>
								</button>
								<div data-role="content">
									<UxList
										bullet="dot"
										size="md"
										data={[
											"가나다라 / 1234 / Bullet Dot",
											"마바사아 / 5678 / Bullet Dot",
											"자차카타 / 9012 / Bullet Dot",
										]}
									/>
								</div>
							</div>
							<div data-expanded={false}>
							<button
									type="button"
									data-role="button"
									// onClick={() => {console.log("UxCollapse button3");}}
								>
									<span>UxCollapse3</span>
								</button>
								<div data-role="content">
									<UxList
										prefix="-"
										size="md"
										data={[
											"가나다라 / 1234 / Bullet Dot",
											"마바사아 / 5678 / Bullet Dot",
											"자차카타 / 9012 / Bullet Dot",
										]}
									/>
								</div>
							</div>
						</UxCollapse>

						<UxConfirm>UxConfirm</UxConfirm>
						<UxDatepicker>UxDatepicker</UxDatepicker>
						<UxDropdown>UxDropdown</UxDropdown>
						<UxField>UxField</UxField>
						<UxFilter>UxFilter</UxFilter>
						<UxForm>UxForm</UxForm>
						<UxGroup>UxGroup</UxGroup>

						<UxCard>
							<UxInfo
								data={[
									{ label: "label1", value: "value1" },
									{ label: "label2", value: "value2" },
									{ label: "label3", value: "value3" },
								]}
							/>
						</UxCard>

						<UxCard>
							<UxInfo
								className="line"
								data={[
									{ label: "label1", value: "value1" },
									{ label: "label2", value: "value2" },
									{ label: "label3", value: "value3" },
								]}
							/>
						</UxCard>

						<UxKeypad
							shuffle
						/>

						<UxCard>
							<UxList
								bullet="dot"
								size="md"
								data={[
									"가나다라 / 1234 / Bullet Dot",
									"마바사아 / 5678 / Bullet Dot",
									"자차카타 / 9012 / Bullet Dot",
								]}
							/>
						</UxCard>

						<UxCard>
							<UxList
								className="line"
								prefix="number"
								size="md"
								data={[
									"가나다라 / 1234 / Prefix Number",
									"마바사아 / 5678 / Prefix Number",
									"자차카타 / 9012 / Prefix Number",
								]}
							/>
						</UxCard>

						<UxMasking
							value="123"
							mask="7"
						/>

						<UxModal>UxModal</UxModal>
						<UxPagination>UxPagination</UxPagination>
						<UxPopover>UxPopover</UxPopover>
						<UxProgress>UxProgress</UxProgress>
						<UxSwiper>UxSwiper</UxSwiper>
						<UxTab
							selected={3}
							linear
							scroll
							// full
							onChange={(event, index) => {console.log(event, index)}}
						>
							<div data-label="Tab1">
								Contents1
							</div>
							<div data-label="Tab2">
								Contents2
							</div>
							<div data-label="Tab3">
								Contents3
							</div>
							<div data-label="Tab4">
								Contents4
							</div>
							<div data-label="Tab5">
								Contents5
							</div>
							<div data-label="Tab6">
								Contents6
							</div>
							<div data-label="Tab7">
								Contents7
							</div>
							<div data-label="Tab8">
								Contents8
							</div>
							<div data-label="Tab9">
								Contents9
							</div>
							<div data-label="Tab10">
								Contents10
							</div>
						</UxTab>

						<UxTable className="center">
							<colgroup>
									<col width="50%" />
									<col width="50%" />
							</colgroup>
							<thead>
								<tr>
									<th scope="col">label</th>
									<th scope="col">label</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>value</td>
									<td>value</td>
								</tr>
							</tbody>
						</UxTable>

						<UxTable className="center">
							<colgroup>
									<col width="50%" />
									<col width="50%" />
							</colgroup>
							<tbody>
								<tr>
									<th scope="row">label</th>
									<td className="left">value</td>
								</tr>
								<tr>
									<th scope="row">label</th>
									<td className="left">value</td>
								</tr>
							</tbody>
						</UxTable>

						<UxTimeline>
							<div>타임라인 1<br />줄바꿈 타임라인 1<br />줄바꿈 타임라인 1</div>
							<div>타임라인 2<br />줄바꿈 타임라인 2<br />줄바꿈 타임라인 2</div>
							<div>타임라인 3<br />줄바꿈 타임라인 3<br />줄바꿈 타임라인 3</div>
						</UxTimeline>

						<UxTimeline
							number
						>
							<div>타임라인 1<br />줄바꿈 타임라인 1<br />줄바꿈 타임라인 1</div>
							<div>타임라인 2<br />줄바꿈 타임라인 2<br />줄바꿈 타임라인 2</div>
							<div>타임라인 3<br />줄바꿈 타임라인 3<br />줄바꿈 타임라인 3</div>
						</UxTimeline>

						<UxToast>UxToast</UxToast>
						<UxToggle>UxToggle</UxToggle>
						<UxTooltip>UxTooltip</UxTooltip>

					</UxContent>
				</UxArticle>
			</UxSection>
			<UxDock>
				Dock
			</UxDock>
		</UxLayout>
	);
};

export default Page;