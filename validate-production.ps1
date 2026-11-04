$paths = @(
    '/',
    '/sobre',
    '/solucoes',
    '/solucoes/consultoria-regulatoria',
    '/solucoes/projetos-eletricos',
    '/solucoes/energia-solar',
    '/solucoes/eletropostos',
    '/solucoes/automacao',
    '/solucoes/viabilidade',
    '/projetos',
    '/projetos/reavaliacao-inversao-fluxo-mmgd',
    '/projetos/usina-solar-comercial-300kwp',
    '/contato',
    '/privacidade',
    '/termos',
    '/robots.txt'
)

foreach ($p in $paths) {
    $target = "https://renovera-institucional.vercel.app$p"
    try {
        $res = Invoke-WebRequest -Uri $target -UseBasicParsing -TimeoutSec 15
        Write-Host "$target [HTTP $($res.StatusCode)] OK"
    } catch {
        Write-Host "$target [ERRO: $_]"
    }
}
