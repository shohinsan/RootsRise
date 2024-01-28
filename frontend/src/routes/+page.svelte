<script lang="ts">
    import type { Base } from '$customTypes';
    import { InfoTab, Tree } from '$components';
    import { page } from '$app/stores';
    import { info, dataset } from '$stores';
    import { utils } from '$lib';
    import { Loading } from '$lib/assets';
    export let isLoading = true;

    $: data = $page.data.member;

    $: {
        setTimeout(() => {
            dataset.set(utils.addedNew(data));
            isLoading = false; 
        }, 2000); 
    }

    let activeTab: Base | undefined;

    info.subscribe((value) => {
        activeTab = value;
    });
</script>

{#if isLoading}
    <div class="loading-container">
        <Loading />
    </div>
{:else}
    <Tree dataset={$dataset} />
    <InfoTab {...activeTab} />
{/if}

<style lang="scss">
    .loading-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
</style>
