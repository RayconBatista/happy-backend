"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrphanages1602804895388 = void 0;
const typeorm_1 = require("typeorm");
class createOrphanages1602804895388 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'about',
                    type: 'varchar'
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'open_hours',
                    type: 'varchar'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('orphanages');
    }
}
exports.createOrphanages1602804895388 = createOrphanages1602804895388;
