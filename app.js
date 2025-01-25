const sumNumbers = (...nums) => {
	if (nums.length <= 1) {
		return nums.length ? nums[0] : 0;
	}
	let sum = 0;
	for (let index=0; index<nums.length; index++) {
		sum += nums[index];
	}
	return sum;
};

export default sumNumbers;