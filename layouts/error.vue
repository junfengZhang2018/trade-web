<template>
    <div class="error">
        {{ error.statusCode }}
		<br>
        {{ error.message }}
    </div>
</template>
<script>
export default {
    props: ["error"],
};
</script>
<style lang="scss" scoped>
	.error {
		text-align: center;
		padding: 34px;
	}
</style>