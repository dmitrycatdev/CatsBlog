using Microsoft.EntityFrameworkCore.Migrations;

namespace DBRepository.Migrations
{
    public partial class UserTypeToDbo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserType",
                schema: "dict",
                table: "UserType");

            migrationBuilder.RenameTable(
                name: "UserType",
                schema: "dict",
                newName: "UserTypes");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserTypes",
                table: "UserTypes",
                column: "UserTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserTypes",
                table: "UserTypes");

            migrationBuilder.EnsureSchema(
                name: "dict");

            migrationBuilder.RenameTable(
                name: "UserTypes",
                newName: "UserType",
                newSchema: "dict");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserType",
                schema: "dict",
                table: "UserType",
                column: "UserTypeId");
        }
    }
}
