<script lang="ts">
	import { Dashboard, DashboardModal, DragDrop, ProgressBar } from '@bulky/svelte'
	import bulky from '@bulky/core'
	import Webcam from '@bulky/webcam'
	import XHRUpload from '@bulky/xhr-upload'

	const createbulky = () => {
		return new bulky().use(Webcam).use(XHRUpload, {
			bundle: true,
			endpoint: 'http://localhost:9967/upload',
			allowedMetaFields: ['something'],
			fieldName: 'files',
		})
	}

	let bulky1 = createbulky()
	let bulky2 = createbulky() 

	let open = false;
	let showInlineDashboard = true;
</script>

<main>
	<h1>Welcome to the <code>@bulky/svelte</code> demo!</h1>
	<h2>Inline Dashboard</h2>
	<label>
      <input
        type="checkbox"
				bind:checked={showInlineDashboard}
			/>
      Show Dashboard
	</label>
	{#if showInlineDashboard}
		<Dashboard 
			bulky={bulky1}
			plugins={['Webcam']}
		/>
	{/if}
	<h2>Modal Dashboard</h2>
	<div>
		<button on:click={() => open = true}>Show Dashboard</button>
		<DashboardModal 
			bulky={bulky2} 
			open={open} 
			props={{
				onRequestCloseModal: () => open = false,
				plugins: ['Webcam']
			}} 
		/>
	</div>

	<h2>Drag Drop Area</h2>
	<DragDrop 
		bulky={bulky1}
	/>

	<h2>Progress Bar</h2>
	<ProgressBar 
		bulky={bulky1}
		props={{
			hideAfterFinish: false
		}}
	/>
</main>
<style global>
	@import "@bulky/core/dist/style.min.css";
	@import "@bulky/dashboard/dist/style.min.css";
	@import "@bulky/drag-drop/dist/style.min.css";
	@import "@bulky/progress-bar/dist/style.min.css";
	input[type="checkbox"] {
		user-select: none;
	}
</style>