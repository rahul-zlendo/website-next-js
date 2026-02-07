# Page migration helper script
param(
    [string]$SourceFile,
    [string]$DestFile
)

# Read the source file
$content = Get-Content $SourceFile -Raw

# Apply transformations
$content = $content -replace "^(import.*from 'react-router-dom';?\s*\n)", "'use client';`n`n"
$content = "'use client';`n`n" + $content
$content = $content -replace "import \{ Link, useNavigate, useLocation, useParams, useSearchParams \} from 'react-router-dom';", "import Link from 'next/link';`nimport { useRouter, usePathname, useSearchParams as useNextSearchParams } from 'next/navigation';"
$content = $content -replace "import \{ Link, useNavigate, useLocation \} from 'react-router-dom';", "import Link from 'next/link';`nimport { useRouter, usePathname } from 'next/navigation';"
$content = $content -replace "import \{ Link, useNavigate \} from 'react-router-dom';", "import Link from 'next/link';`nimport { useRouter } from 'next/navigation';"
$content = $content -replace "import \{ Link, useLocation \} from 'react-router-dom';", "import Link from 'next/link';`nimport { usePathname } from 'next/navigation';"
$content = $content -replace "import \{ Link \} from 'react-router-dom';", "import Link from 'next/link';"
$content = $content -replace "import \{ useNavigate \} from 'react-router-dom';", "import { useRouter } from 'next/navigation';"
$content = $content -replace "import \{ useLocation \} from 'react-router-dom';", "import { usePathname } from 'next/navigation';"
$content = $content -replace "import \{ useParams \} from 'react-router-dom';", "// useParams as props in Next.js"
$content = $content -replace "import \{ useSearchParams \} from 'react-router-dom';", "import { useSearchParams } from 'next/navigation';"

# Update imports to use @ prefix
$content = $content -replace "from '\.\./\.\./(components|context|store|services|utils|constants|config)", "from '@/`$1"
$content = $content -replace "from '\.\./\.\./(lib)", "from '@/`$1"
$content = $content -replace "from '\.\./(components|context|store|services|utils|constants|config)", "from '@/`$1"
$content = $content -replace "from '\.\./components", "from '@/components"
$content = $content -replace "from '\.\./lib", "from '@/lib"

# Update asset imports
$content = $content -replace "import (.*) from '\.\.\/assets\/", "const `$1 = '/assets/"
$content = $content -replace "import (.*) from '\.\./\.\.\/assets\/", "const `$1 = '/assets/"

# Remove SEOHead imports and usage
$content = $content -replace "import SEOHead from.*\n", ""
$content = $content -replace "\s*<SEOHead[\s\S]*?\/>\s*\n", ""

# Update Link components
$content = $content -replace '<Link\s+to=', '<Link href='

# Update navigation
$content = $content -replace 'const navigate = useNavigate\(\);', 'const router = useRouter();'
$content = $content -replace 'navigate\(', 'router.push('
$content = $content -replace 'const location = useLocation\(\);', 'const pathname = usePathname();'
$content = $content -replace 'location\.pathname', 'pathname'

# Write to destination
$destDir = Split-Path $DestFile -Parent
if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
}
Set-Content -Path $DestFile -Value $content

Write-Host "Migrated: $SourceFile -> $DestFile" -ForegroundColor Green
