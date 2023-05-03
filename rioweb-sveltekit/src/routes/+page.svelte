<script>
    import rio from '../lib/images/RioLogo.png';

</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Rio Web Demo" />
</svelte:head>

<section>
    <h1>
        <span class="welcome">
            <picture>
                <source srcset={rio} type="image/png">
                <img src={rio} alt="Rio">
            </picture>
        </span>

        Welcome to RioWeb
    </h1>

    <h2>
        try editing <strong>src/routes/+page.svelte</strong>
    </h2>

    <!--    <Counter />-->
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    h1 {
        width: 100%;
    }

    .welcome {
        display: block;
        position: relative;
        width: 100%;
        height: 0;
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }

    .welcome img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: block;
        object-fit: contain;
    }
</style>