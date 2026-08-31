const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/logos');
const outputDir = path.join(__dirname, '../public/team');

// Criar pasta team se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  {
    input: 'WhatsApp Image 2026-07-02 at 23.02.22 (1).jpeg',
    output: 'diogenes-jardim.jpg',
    name: 'Diógenes Jardim'
  },
  {
    input: 'WhatsApp Image 2026-06-11 at 19.27.45.jpeg',
    output: 'edson-miranda.jpg',
    name: 'Edson Miranda'
  },
  {
    input: 'WhatsApp Image 2026-06-11 at 18.24.38.jpeg',
    output: 'bruno-avila.jpg',
    name: 'Bruno Avila'
  }
];

async function optimizeImages() {
  console.log('🖼️  Otimizando imagens da equipe...\n');

  for (const img of images) {
    try {
      const inputPath = path.join(imagesDir, img.input);
      const outputPath = path.join(outputDir, img.output);

      // Verificar se arquivo existe
      if (!fs.existsSync(inputPath)) {
        console.log(`❌ Não encontrado: ${img.input}`);
        continue;
      }

      const inputStats = fs.statSync(inputPath);
      const inputSizeKB = (inputStats.size / 1024).toFixed(2);

      // Otimizar: redimensionar para 800x1000 e qualidade 80%
      await sharp(inputPath)
        .resize(800, 1000, {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ quality: 80, progressive: true })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const outputSizeKB = (outputStats.size / 1024).toFixed(2);
      const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✅ ${img.name}`);
      console.log(`   ${inputSizeKB} KB → ${outputSizeKB} KB (redução de ${reduction}%)`);
      console.log(`   Salvo em: public/team/${img.output}\n`);

    } catch (error) {
      console.log(`❌ Erro ao processar ${img.name}: ${error.message}\n`);
    }
  }

  console.log('🎉 Otimização concluída!');
}

optimizeImages().catch(console.error);
