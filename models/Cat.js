class Cat {
    static _tableName = 'cats';
    static _client = null;

    static async create() {}

    static async findAll() {
        const {rows} = await this._client.query(`SELECT * FROM ${this._tableName}`);
        return rows
    }

    static async findByPk(id) {
        // знайти 1 кота за його id
        const {rows} = await this._client.query(`SELECT * FROM ${this._tableName} WHERE id = ${id}`);
        return rows
    }

    static async deleteByPk(id) {
        // видалити 1 кота з БД за його id
        const {rows} = await this._client.query(`DELETE FROM ${this._tableName} WHERE id = ${id} RETURNING *`);
        return rows;
    }

    static async updateByPk() {}


}

module.exports = Cat;