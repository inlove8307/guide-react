import React from "react";
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
						<UxBadge>UxBadge</UxBadge>

						<UxGroup className="flex">
							<UxButton
								label="UxButton"
								icon="ux-icon-clear"
								align="right"
							/>
							<UxButton
								icon="ux-icon-clear"
								label="label"
							/>
						</UxGroup>

						<UxCheckbox>UxCheckbox</UxCheckbox>
						<UxChip>UxChip</UxChip>
						<UxDivider>UxDivider</UxDivider>
						<UxFile>UxFile</UxFile>
						<UxImage>UxImage</UxImage>

						<UxInput
							align="right"
							placeholder="입력하세요."
							suffix="원"
							clear
						/>
						<UxInput
							placeholder="입력하세요."
							button="전송"
							timer="05:00"
							clear
						/>
						<UxInput
							placeholder="입력하세요."
							icon="ux-icon-calendar"
							clear
						/>
						<UxInput
							value="valid"
							placeholder="입력하세요."
							clear
							valid
						/>
						<UxInput
							value="invalid"
							placeholder="입력하세요."
							clear
							invalid
						/>
						<UxInput
							value="Readonly"
							placeholder="입력하세요."
							prefix="prefix"
							suffix="suffix"
							button="전송"
							timer="05:00"
							clear
							readonly
						/>
						<UxInput
							value="Disabled"
							placeholder="입력하세요."
							prefix="prefix"
							suffix="suffix"
							button="전송"
							timer="05:00"
							clear
							disabled
						/>

						<UxLink>UxLink</UxLink>

						<UxPassword
							mask="12"
							clear
						/>

						<UxRadio>UxRadio</UxRadio>
						<UxRange>UxRange</UxRange>
						<UxSelect>UxSelect</UxSelect>
						<UxSwitch>UxSwitch</UxSwitch>

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

						<UxTextarea>UxTextarea</UxTextarea>

						{/* MIXIN */}
						<UxAlert>UxAlert</UxAlert>
						<UxBreadcrumb>UxBreadcrumb</UxBreadcrumb>
						<UxCalendar>UxCalendar</UxCalendar>
						<UxCard>UxCard</UxCard>
						<UxCollapse>UxCollapse</UxCollapse>
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
						<UxTab>UxTab</UxTab>

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