import { Selector } from "testcafe";

fixture`Simple Sorting`.page`./single-list.html`;

let list1 = Selector("#list1");

test("Sort down list", async browser => {
	const dragStartPosition = list1.child(0);
	const dragEl = await dragStartPosition();
	const dragEndPosition = list1.child(2);

	const targetStartPosition = list1.child(2);
	const target = targetStartPosition();
	const targetEndPosition = list1.child(1);

	console.log(dragEl)
	console.log(target)

	await browser
		.expect(dragStartPosition.innerText)
		.eql(dragEl.innerText)

		.expect(targetStartPosition.innerText)
		.eql(target.innerText)

		.takeScreenshot()
		.dragToElement(dragEl, target)
		.takeScreenshot()

		.expect(dragEndPosition.innerText)
		.eql(dragEl.innerText)

		.expect(targetEndPosition.innerText)
		.eql(target.innerText);
});

test("Sort up list", async browser => {
	const dragStartPosition = list1.child(2);
	const dragEl = dragStartPosition();
	const dragEndPosition = list1.child(0);

	const targetStartPosition = list1.child(0);
	const target = targetStartPosition();
	const targetEndPosition = list1.child(1);

	console.log(dragEl)
	console.log(target)

	await browser
		.expect(dragStartPosition.innerText)
		.eql(dragEl.innerText)

		.expect(targetStartPosition.innerText)
		.eql(target.innerText)

		.takeScreenshot()
		.dragToElement(dragEl, target)
		.takeScreenshot()

		.expect(dragEndPosition.innerText)
		.eql(dragEl.innerText)

		.expect(targetEndPosition.innerText)
		.eql(target.innerText);
});
